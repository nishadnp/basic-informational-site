# basic-informational-site

A minimal web server built with Node.js using core modules (`http`, `fs`, `path`) to handle URL routing and serve static HTML pages without external frameworks or bundlers. 

Built as part of [The Odin Project Node.js](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) curriculum.

## Features

- Native Node.js `http` module server.
- Route handling for `/`, `/about`, and `/contact-me`.
- Redirect handling (`302 Found`) from `/home` to `/`.
- Fallback `404.html` page for undefined routes.
- Safe path resolution using Node's `path` module.

## Project Implementations (`index.js` vs `app.js`)

This repository includes two versions of the same Basic Informational Site, serving as a side-by-side comparison of low-level HTTP handling versus modern framework abstraction.

### 1. Vanilla Node.js (`index.js`)
* **Core Modules:** `http`, `fs`, `path`
* **Approach:** Uses a manual `switch` statement to inspect `req.url`, resolves absolute paths with `path.join()`, reads files explicitly via `fs.readFile`, and manages headers and status codes manually using `res.writeHead()`.
* **Purpose:** Demonstrates a foundational understanding of how the HTTP protocol works under the hood without external abstractions.

### 2. Express.js (`app.js`)
* **Framework:** Express.js
* **Approach:** Utilizes declarative routing methods (`app.get()`, `app.redirect()`), automates content types and file streaming with `res.sendFile()`, and handles catch-all fallback errors cleanly using `app.use()` middleware.
* **Purpose:** Highlights how frameworks drastically reduce boilerplate, improve code readability, and streamline server-side logic for real-world development.

## File Structure

```text
.
├── 404.html
├── about.html
├── contact-me.html
├── index.html
├── index.js
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## Running Locally

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this repository.
3. Run the server:
   ```bash
   node <index.js or app.js>
   ```
   **OR**

   Run the server in watchmode:
   ```bash
   node --watch <index.js or app.js>
   ```

## How to Test

Start either server using `node index.js` (Port 8080) or `node app.js` (Port 3000). 

Open your browser and navigate to (replace `PORT` with `8080` for vanilla or `3000` for Express):

- **Home:** http://localhost:PORT/
- **Redirect Test:** http://localhost:PORT/home (redirects to `/`)
- **About:** http://localhost:PORT/about
- **Contact:** http://localhost:PORT/contact-me
- **404 Page:** Try any invalid URL (e.g., http://localhost:PORT/random)