<img width="721" alt="image" src="https://github.com/user-attachments/assets/afc7aedf-43fe-4f0d-a425-c6fe4134632f">


- JS can only handle a single task at a time
- Web APIs are a collection of interfaces provided by web browsers (or by external services) that enable developers to interact with and manipulate data, the Document Object Model (DOM), multimedia, devices, and more, within web applications.
- Using some web apis. we can offload some long running tasks to browser
- Thses are either callback based or promise based
- callback - setTimeout
    ```md
        - function gets added to call stack
        - async task is initiated and callbacks are registered in web api
        - function gets popped off the callstack
        - after the asynctask is completed, it is sent to `task queue`
    ```
    
- promise - fetch
    ```md
        - function gets added to call stack
        - async task is initiated and callbacks are registered in web api
        - function gets popped off the callstack
        - after the asynctask is completed, it is sent to `microtask queue`
    ```
- The event loops's job is to check if the call stack is empty.
- If that's the case, the callback function is pushed to call stack
- Eventloop prioritises `microtask queue` over `task queue`

