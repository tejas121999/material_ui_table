const express = require("express");
const connectDB = require("./config/db");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());

// connect Database
connectDB();

// routes
app.use("/posts", require("./routes/posts"));

app.get("/", (req, res) => {
    res.send({ Project: "api is running" });
});

// enable corse
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));