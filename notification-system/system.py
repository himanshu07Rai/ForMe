from kafka import KafkaConsumer, KafkaProducer
from queue import PriorityQueue
import json
import threading
import time
from dataclasses import dataclass
from typing import Dict, Any
from enum import Enum
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class NotificationPriority(Enum):
    HIGH = 1
    MEDIUM = 2
    LOW = 3

@dataclass
class Notification:
    id: str
    priority: NotificationPriority
    message: str
    recipient: str
    timestamp: float
    metadata: Dict[str, Any]

    def __lt__(self, other):
        # For PriorityQueue ordering
        return (self.priority.value, self.timestamp) < (other.priority.value, other.timestamp)

class NotificationService:
    def __init__(self, kafka_bootstrap_servers: str, kafka_topic: str):
        self.kafka_bootstrap_servers = kafka_bootstrap_servers
        self.kafka_topic = kafka_topic
        self.priority_queue = PriorityQueue()
        self.running = False
        self.consumer_thread = None
        self.processor_thread = None
        
        # Initialize Kafka producer
        self.producer = KafkaProducer(
            bootstrap_servers=kafka_bootstrap_servers,
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )

    def start(self):
        """Start the notification service"""
        self.running = True
        
        # Start consumer thread
        self.consumer_thread = threading.Thread(target=self._consume_messages)
        self.consumer_thread.daemon = True
        self.consumer_thread.start()
        
        # Start processor thread
        self.processor_thread = threading.Thread(target=self._process_notifications)
        self.processor_thread.daemon = True
        self.processor_thread.start()
        
        logger.info("Notification service started")

    def stop(self):
        """Stop the notification service"""
        self.running = False
        if self.consumer_thread:
            self.consumer_thread.join()
        if self.processor_thread:
            self.processor_thread.join()
        logger.info("Notification service stopped")

    def _consume_messages(self):
        """Consume messages from Kafka and add them to priority queue"""
        consumer = KafkaConsumer(
            self.kafka_topic,
            bootstrap_servers=self.kafka_bootstrap_servers,
            value_deserializer=lambda x: json.loads(x.decode('utf-8')),
            group_id='notification_group',
            auto_offset_reset='earliest'
        )

        while self.running:
            try:
                for message in consumer:
                    data = message.value
                    notification = Notification(
                        id=data['id'],
                        priority=NotificationPriority[data['priority']],
                        message=data['message'],
                        recipient=data['recipient'],
                        timestamp=data.get('timestamp', time.time()),
                        metadata=data.get('metadata', {})
                    )
                    self.priority_queue.put(notification)
                    logger.info(f"Received notification: {notification.id}")
            except Exception as e:
                logger.error(f"Error consuming messages: {str(e)}")
                time.sleep(1)  # Wait before retrying

    def _process_notifications(self):
        """Process notifications from priority queue"""
        while self.running:
            try:
                if not self.priority_queue.empty():
                    notification = self.priority_queue.get()
                    self._send_notification(notification)
                    self.priority_queue.task_done()
                else:
                    time.sleep(0.1)  # Prevent busy-waiting
            except Exception as e:
                logger.error(f"Error processing notification: {str(e)}")

    def _send_notification(self, notification: Notification):
        """Send notification to recipient (implement actual sending logic here)"""
        try:
            # Simulate sending notification
            logger.info(f"Sending {notification.priority.name} priority notification to {notification.recipient}: {notification.message}")
            
            # Record notification delivery
            delivery_record = {
                'notification_id': notification.id,
                'status': 'delivered',
                'timestamp': time.time(),
                'recipient': notification.recipient
            }
            
            # Send delivery confirmation to Kafka
            self.producer.send(
                f"{self.kafka_topic}_delivery_status",
                delivery_record
            )
            
        except Exception as e:
            logger.error(f"Error sending notification: {str(e)}")
            # Requeue failed notifications with exponential backoff
            notification.metadata['retry_count'] = notification.metadata.get('retry_count', 0) + 1
            if notification.metadata['retry_count'] <= 3:
                time.sleep(2 ** notification.metadata['retry_count'])
                self.priority_queue.put(notification)

def send_test_notification(producer: KafkaProducer, topic: str):
    """Utility function to send a test notification"""
    test_notification = {
        'id': f"test_{int(time.time())}",
        'priority': 'HIGH',
        'message': 'This is a test notification',
        'recipient': 'test@example.com',
        'timestamp': time.time(),
        'metadata': {'type': 'test'}
    }
    producer.send(topic, test_notification)
    producer.flush()

if __name__ == "__main__":
    # Configuration
    KAFKA_SERVERS = "localhost:29092"
    KAFKA_TOPIC = "notifications"

    # Initialize and start the service
    notification_service = NotificationService(KAFKA_SERVERS, KAFKA_TOPIC)
    
    try:
        notification_service.start()
        
        # Create a producer for testing
        producer = KafkaProducer(
            bootstrap_servers=KAFKA_SERVERS,
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )
        
        # Send some test notifications
        priorities = ['HIGH', 'MEDIUM', 'LOW']
        for i in range(5):
            test_notification = {
                'id': f"test_{i}",
                'priority': priorities[i % 3],
                'message': f'Test notification {i}',
                'recipient': 'test@example.com',
                'timestamp': time.time(),
                'metadata': {'test_id': i}
            }
            producer.send(KAFKA_TOPIC, test_notification)
        
        producer.flush()
        
        # Keep the service running
        while True:
            time.sleep(1)
            
    except KeyboardInterrupt:
        notification_service.stop()