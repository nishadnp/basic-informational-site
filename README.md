# basic-informational-site

A minimal web server built with Node.js using core modules (`http`, `fs`, `path`) to handle URL routing and serve static HTML pages without external frameworks or bundlers. 

Built as part of [The Odin Project Node.js](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) curriculum.

## Features

- Native Node.js `http` module server.
- Route handling for `/`, `/about`, and `/contact-me`.
- Fallback `404.html` page for undefined routes.
- Safe path resolution using Node's `path` module.

## File Structure

```text
.
├── 404.html
├── about.html
├── contact-me.html
├── index.html
├── index.js
└── README.md
```

## Running Locally

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this repository.
3. Run the server:
   ```bash
   node index.js
   ```
## How to Test

Open your browser and go to:

- Home: http://localhost:8080/

- About: http://localhost:8080/about

- Contact: http://localhost:8080/contact-me

- 404 Page: Try any invalid URL (e.g., http://localhost:8080/random)