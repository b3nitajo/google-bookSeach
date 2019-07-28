const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Serve up static assets to heroku
if (process.env.NODE_ENV === "production") {
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
