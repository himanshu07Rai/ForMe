# NEXT JS

## Detecting server vs client in NextJS application

1. Using process.browser
   process.browser return true on client and return undefind on server side.
   So we can write the following code.

```javascript
let isServer = process.browser ? false : true;
```

2. Checking window object
   window object is only available on the browser, so we can do the following

```javascript
let isServer = typeof window === "undefined" ? false : true;
```
