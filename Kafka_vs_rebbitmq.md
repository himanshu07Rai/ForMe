Producer send events to consumer which go through broker
We can scale brokers isolated from producers or consumers
- inmemory message broker : rebbit mq
- log based message broker : kafka


In in-memory, all events are kept in memory
when a message is sent to consumer, the message is deleted temporarily. It is deleted permanently when the acknowledgement from consumer is received
We dont need to wait for the completion of a prior message before sending any subsequent message. Use Round robbin to get maximum possible throughput. This can lead to out of order processing
To handle messages in order, we need to fanout
Once an event is consumed, it gets totally deleted. And we won't be able to retrieve them ever again.

In log based message brokers
all consumers  reading from a queue get every message in order.
One slow message slows processing of  the rest. So use partitioning.
More durability. Messages are not deleted on disks, but can be replayed later.