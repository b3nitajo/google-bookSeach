const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Routes
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
//  DB Config
const dbAuth = process.env.mogdb;
// Connect to MongoDB
mongoose
  .connect(dbAuth, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
