var express = require("express");
var path = require("path");
var fs = require("fs");
var JSONstuff = require("./db/db.json");


var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


// app.get


// app.post


// JSONstuff.push










app.listen(PORT, function() {
    console.log("App is listening on port" + PORT);
  });