1. Singleton Pattern
Category: Creational
Purpose: Ensures that a class has only one instance and provides a global access point to it.
Use Cases:
Logger class.
Configuration manager.
Connection pool.
2. Factory Method Pattern
Category: Creational
Purpose: Defines an interface for creating objects, allowing subclasses to alter the type of objects created.
Use Cases:
Vehicle factory producing cars or bikes.
Parser factory generating parsers for XML or JSON.
3. Builder Pattern
Category: Creational
Purpose: Constructs complex objects step by step, decoupling construction and representation.
Use Cases:
Building a customizable house (with or without a garden, pool, etc.).
Configuring HTTP requests.
4. Observer Pattern
Category: Behavioral
Purpose: Defines a one-to-many dependency so when one object changes state, all dependents are notified.
Use Cases:
Event listeners in GUIs.
Real-time stock price updates.
5. Strategy Pattern
Category: Behavioral
Purpose: Defines a family of algorithms, encapsulates them, and makes them interchangeable.
Use Cases:
Payment processing using different methods (credit card, PayPal, etc.).
Sorting algorithms.
6. Adapter Pattern
Category: Structural
Purpose: Converts one interface into another expected by a client.
Use Cases:
Using legacy code with modern interfaces.
Power adapters for different plug types.
7. Decorator Pattern
Category: Structural
Purpose: Dynamically adds behavior to an object without altering its structure.
Use Cases:
Adding features to a coffee order (milk, sugar, etc.).
Logging or authentication layers.
8. Proxy Pattern
Category: Structural
Purpose: Provides a surrogate or placeholder to control access to an object.
Use Cases:
Lazy initialization.
Security proxies.
9. Command Pattern
Category: Behavioral
Purpose: Encapsulates a request as an object, allowing you to parameterize clients with different requests.
Use Cases:
Undo/redo functionality in text editors.
Task scheduling.
10. Template Method Pattern
Category: Behavioral
Purpose: Defines the skeleton of an algorithm, letting subclasses override specific steps.
Use Cases:
Report generation templates.
Game AI behavior customization.
Summary of Importance:
These patterns solve common software design challenges, improve scalability, and enhance code maintainability. They’re frequently asked in Low-Level Design (LLD) interviews because they represent reusable solutions.