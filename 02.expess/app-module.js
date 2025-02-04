const express = require("express");

const app = express();

// Application level settings
app.set("view engine", "ejs");

// Routing
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/api/data", (req, res) => {
    res.json({
        message: "Data received",
        data: req.body,
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("something went wrong");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is now running at port ${port}    http://localhost:3000`);
});
