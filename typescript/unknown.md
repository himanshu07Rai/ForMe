### Function Parameter of Unknown Type
```typescript
function handleInput(input: unknown) {
    if (typeof input === "string") {
        console.log("String length:", input.length);
    } else if (typeof input === "number") {
        console.log("Square:", input * input);
    } else {
        console.log("Unknown type");
    }
}

handleInput("Hello"); // Output: String length: 5
handleInput(4);       // Output: Square: 16
handleInput(true);    // Output: Unknown type
```

### Working with JSON.parse Output

```typescript
function parseJson(jsonString: string): unknown {
    return JSON.parse(jsonString);
}

const data = parseJson('{"name": "Alice", "age": 25}');

if (typeof data === "object" && data !== null && "name" in data) {
    const name = (data as { name: string }).name;
    console.log("Name:", name);
} else {
    console.log("Invalid data format");
}
```

### Type Guards with Unknown

```typescript
function isPerson(obj: unknown): obj is { name: string; age: number } {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        "age" in obj
    );
}

const data: unknown = { name: "Bob", age: 30 };

if (isPerson(data)) {
    console.log(`${data.name} is ${data.age} years old.`);
} else {
    console.log("Data is not a person");
}
```

### Using unknown in Promises

```typescript
async function fetchData(): Promise<unknown> {
    const response = await fetch("https://api.example.com/data");
    return response.json();
}

fetchData().then(data => {
    if (typeof data === "object" && data !== null && "id" in data) {
        const id = (data as { id: number }).id;
        console.log("Data ID:", id);
    } else {
        console.log("Data does not contain an ID");
    }
});
```

### Handling User Input

```typescript
function handleUserInput(input: unknown) {
    if (typeof input === "string") {
        console.log("User entered a string:", input);
    } else if (typeof input === "number") {
        console.log("User entered a number:", input);
    } else {
        console.log("User entered an unsupported type");
    }
}

handleUserInput("Hello"); // Output: User entered a string: Hello
handleUserInput(42);      // Output: User entered a number: 42
handleUserInput({});      // Output: User entered an unsupported type
```




