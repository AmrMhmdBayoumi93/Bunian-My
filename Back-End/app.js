// 1. Load variables natively from the root .env file
require("dotenv").config();

// 2. Packages
const express = require('express');
const mongoose = require("mongoose");
const connectedDB = require("./config/db");

// 3. Initialize Express
const app = express();

// 4. Global Middleware
app.use(express.json());

// 5. Fire DB Connection 
connectedDB();

// 6. Simple Logger
if (process.env.NODE_ENV === "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method}  ${req.originalUrl}`);
        next();
    });
}

// 7. Test Route
app.get("/test", (req, res) => {
    res.json({ msg: "Test Route Successfully ya amoooooor" });
});

// 8. Server Setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});