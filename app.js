
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = express();
const port = 3000

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html" )
});

app.listen (port, function(){
  console.log(`Example app listening on port ` + port);
})
