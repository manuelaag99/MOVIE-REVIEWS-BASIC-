const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express(); // create a constant that runs on express; call it "app"

app.set("view engine", "ejs"); // using the "app" constant, call EJS to be rendered if called 
app.use(bodyParser.urlencoded({extended: true})); // using the "app" constant, call bodyParser to read data from forms 
app.use(express.static("public")); // using the "app" constant, call static files found on a folder called "public" 


app.get("/", function(req, res) {
    console.log(res.statusCode);
    res.send("Hello World");
})

app.listen(3000, function(req, res) {
    console.log("This server is running on port 3000.");
})
