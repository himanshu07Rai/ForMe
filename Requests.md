![freeCodeCamp org - System Design Concepts Course and Interview Prep  F2FmTdLtb_4 - 828x466 - 20m14s](https://github.com/user-attachments/assets/87530ee4-1c7b-4338-9e3a-1774e539e8ea)



| Feature            | Polling                                     | GraphQL                                   | WebSockets                                | Server-Sent Events (SSE)                 |
|---------------------|---------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| **Definition**      | Client periodically requests updates from the server. | Query language for APIs, often paired with HTTP/real-time updates. | Full-duplex communication over a persistent connection. | One-way real-time updates from server to client. |
| **How It Works**    | Sends repeated HTTP requests at intervals.  | Queries/mutations fetch data; subscriptions enable real-time updates. | Opens a persistent connection for bidirectional communication. | Keeps an HTTP connection open for streaming updates. |
| **Pros**            | - Simple to implement.                     | - Flexible, declarative data fetching.   | - Real-time, low latency.                 | - Lightweight, one-way updates.           |
|                     | - Works with standard HTTP servers.        | - Fetches only requested fields.         | - Ideal for real-time collaborative apps. | - Simpler than WebSockets for one-way updates. |
| **Cons**            | - High latency for frequent updates.       | - Complexity increases with subscriptions. | - Higher server and client resource usage. | - One-way communication only.             |
|                     | - High server load with many clients.      | - Learning curve for schema design.      | - Not always suitable for all use cases.  | - Limited browser support (older versions). |
| **Best For**        | Infrequent or periodic updates.            | Flexible APIs and structured data queries. | Real-time apps (e.g., chat, multiplayer). | Real-time updates like notifications or live data. |
