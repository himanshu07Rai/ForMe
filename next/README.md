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

---

## Server-Side Rendering in React using Next.js – How it Works & Implementation Example

Initially, everything was processed on the server and an HTML page was delivered to the client-side browser to display a web page. This worked great until more interactive content started being displayed on the web pages. Every time some new interactivity had to be handled, the whole page was re-compiled by the server. With more complex websites being made, server-side rendering (SSR) became slow and inefficient.

This gave rise to the client-side rendering process where the browser renders the HTML page by modifying DOM (Document Object Model). For any interactivity, the browser does not need to contact the server since all the code is run on the client-side.

The web page is rendered only once everything is executed making the initial loading slower and not SEO friendly.

**Now, what if we could load the web page with SSR and then dynamically fetch only the necessary content that is required rather than re-compiling the whole page?**

In **Client side rendering**, the browser renders the HTML page by modifying DOM. For any interactivity, the browser does not need to contact the server since all the code is run on the client-side. But, in this scenario, the user needs fast internet and an up-to-date browser to avoid issues in displaying the content. Also, the web page is rendered only once everything is executed making the initial loading slower and not SEO friendly.

**Now, what if we could load the web page with SSR and then dynamically fetch only the necessary content that is required rather than re-compiling the whole page?**

## Server-Side Rendering

Server-side rendering with JavaScript libraries like React is where the server returns a ready to render HTML page and the JS scripts required to make the page interactive. The HTML is rendered immediately with all the static elements. In the meantime, the browser downloads and executes the JS code after which the page becomes interactive. The interactions on this page are now handled by the browser on the client-side. For any new content or new data, the browser sends a request to the server through APIs and only the newly required information is fetched.

### ADVANTAGES

- Fast initial loading of the web page since ready to display HTML is provided to the browser.
- Great user experience even if the user has a bad connection, outdated device or JavaScript disabled in the browser because all the basic content is ready to be rendered.
- The content of the web page is indexed quicker resulting in better SEO ranking.
- A great option for static pages since server-side rendering loads the content promptly and efficiently.

### DISADVANTAGES

- SSR needs more resources and can be expensive since all the processing is done on the server.
- For complex applications, the high number of server requests can slow down the site.
- Increased load with many users can lead to bottlenecks.
- Setting up SSR can be complicated and tedious.

## Performance

When talking about performance, there are three major parameters that we need to consider:

1. TFB (Time to First Byte) – the amount of time between a link clicked and the first bit of content is received.

2. FCP (First Contentful Paint) – the moment when some requested content is rendered.

3. TTI (Time To Interactive) – the time when the page becomes interactive.

TTFB can be more with server-side rendering since a fully rendered HTML page is sent to the browser, but FCP is much faster which contributes to improved performance and user-friendliness. TTI can depend on the complexity of the web page and how many scripts need to run for rendering it. Most pages have moderate level interactivity which results in low TTI when rendering server-side.

## Next.js

Next.js is an open-source development framework built over Node.js that simplifies the process for SSR and offers many other useful features.

- Minimal config – it provides automatic compilation and bundling.
- Pre-rendering pages – pages can be rendered at build time or request time in a single project.
- Built-in CSS support – option to import CSS files from a JS file.
- Fast refresh – fast editing experience with hot code reloading.
- Image Optimization – images are automatically optimized.
- Typescript support – automatic configuration and compilation.
- Analytics – it provides a mechanism to measure performance.
- Automatic Code Splitting – only the necessary libraries and script files required at a time are rendered.
- Dynamic Components – JavaScript modules and React Components can be imported dynamically.
- Static Exports – a fully static site from an app can be exported.
