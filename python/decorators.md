# Python Decorators

## What Are Python Decorators?

Decorators in Python are a design pattern that allows the modification of a function, method, or class behavior without modifying its source code. They wrap another function (or method) to enhance or alter its functionality. 

Decorators are often used to:
- Add functionality (e.g., logging, timing, access control).
- Modify input/output.
- Implement design patterns like singletons.

In Python, decorators are typically functions or classes that use the `@` syntax.

---

## How Do Decorators Work?

Decorators work by wrapping a target function inside another function, which alters its behavior. This is achieved by:
1. Accepting the target function as an argument.
2. Defining a nested function (wrapper) that contains additional logic.
3. Returning the wrapper function.

---

## Syntax

### Using the `@` Syntax:
```python
@decorator_function
def target_function():
    print("Target function is running.")
