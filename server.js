var express = require("express");
var path = require("path");
var fs = require("fs");
var JSONstuff = require("./db/db.json");


var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  

// app.post


// JSONstuff.push


//app.del









app.listen(PORT, function() {
    console.log("App is listening on port" + PORT);
  });