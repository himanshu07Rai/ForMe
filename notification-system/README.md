## There are two types of push notifications:

- Mobile push notification: Mobile push notifications are small, pop-up messages that can appear on a mobile device even when a user isn’t actively using an app.

- Web push notifications: Web push notifications are small message alerts that are displayed on a visitor’s desktop, tablet, or mobile device when they have their web browser open.

## How does Firebase FCM work?

![Image](https://github.com/user-attachments/assets/646b3687-3fea-40f8-b3e5-09353866b0ee)

## Key features of the FCM push notification provider

- Targeted distribution
    - To single devices.
    - To groups of devices.
    - To devices subscribed to topics

- Priority
    - Supports setting message priority (normal or high) to influence delivery behavior.

### Sending push notifications via FCM usually involves the following steps

- Client App Registration: The mobile app installs on the device and registers itself with FCM during app launch. This registration generates a unique token for the device that identifies it for receiving messages.
- Token Retrieval: The mobile app retrieves the generated token and sends it to your app server. This token allows your server to target specific devices or groups of devices.
- Message Sending: Your app server prepares the message payload containing the information you want to deliver to the mobile app. This payload can include text, data, or a combination of both.
- FCM Connection: The app server connects to the FCM API using the Firebase Admin SDK or other libraries.
- Message Delivery: The app server sends the message payload and recipient information (tokens) to the FCM API.
- Routing and Delivery: FCM acts as a mediator, routing the message to the appropriate devices based on the provided tokens. FCM utilizes Google’s infrastructure to ensure efficient and reliable message delivery.
- Wake-up Call (if needed): If the mobile app is in the background, FCM might send a wake-up call to activate it so it can receive the message.
- Message Received: The mobile app receives the message payload from FCM and parses the information.
- Action (Optional): The mobile app can then display a notification, play a sound, update its data, or perform any other actions based on the message content.


## How do I send notifications to all users with FCM?

##### Topic Messaging: 
This method involves creating a topic on the FCM server and then asking all your users to subscribe to that topic within your app. Once subscribed, any message you send to that topic will be delivered to all subscribed devices. This is a good approach if you want to send general announcements or messages relevant to all users.

#### Condition Messages: 
This approach is a bit more advanced and lets you target users based on a specific condition. You can use the condition field when sending a message to FCM and specify a logical expression that evaluates to true for the targeted devices. While not ideal for sending to all users exactly, it can be useful for reaching a very broad segment defined by a certain criteria. For example, the condition could be 'all' in topics to target any devices subscribed to any topic.