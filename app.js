
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");
const app = express();
const port = 3000

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html" )
});

app.post("/", function(req, res){

  const firstName = req.body.fName;
  const secondName = req.body.sName;
  const email = req.body.email;

  const data = {

     members: [
       {
         email_address: email,
         status: "subscribed",
         merge_fields: {
           FNAME: firstName,
           LNAME: secondName
         }
       }
     ]
  };


  const jsonData = JSON.stringify(data);

  const url = "https://us12.api.mailchimp.com/3.0/lists/b921c20e94"

  const options = {
              method: "POST",
              auth: "ahmet1:739e8f6bfd015c099d38ae41711539ae-us12"

  }

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html")
    }


    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();


})

app.post("/failure", function(req, res) {
  res.redirect("/");
});


// API KEY
// 739e8f6bfd015c099d38ae41711539ae-us12

// Audience ID or List ID
// b921c20e94


app.listen (process.env.PORT || port, function(){
  console.log(`Example app listening on port ` + port);
})
