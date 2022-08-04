const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("home");
})

app.get("/add-account", function(req, res){
  res.render("add-account");
  console.log(req.body.postitem);

})



app.listen("3000", function(){
  console.log("Server is running on port 3000");
})