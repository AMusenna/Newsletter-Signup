
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = express();
const port = 3000

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html" )
});

app.post("/", function(req, res){

  var firstName = req.body.fName;
  var secondName = req.body.sName;
  var email = req.body.email;

  console.log(firstName, secondName, email);

})

app.listen (port, function(){
  console.log(`Example app listening on port ` + port);
})
