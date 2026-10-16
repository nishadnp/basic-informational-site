const express = require("express");
const app = express();

// Start the server and log confirmation
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
    res.sendFile("./contact-me.html", { root: __dirname });
});

// redirect page
app.get("/home", (req, res) => {
    res.redirect("/");
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile("./404.html", { root: __dirname });
});