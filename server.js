// Dependencies
const express = require("express");
//const path = require("path");
const apiRoute = require("./routes/api");
const htmlRoute = require("./routes/html");

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Call Route files
app.use(express.static("public"));
app.get("/notes", apiRoute);
app.get("/", htmlRoute);

// Start the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});