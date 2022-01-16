const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
const fs = require("fs")

  apikey = "AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw";
  url="https://maps.googleapis.com/maps/api/geocode/json?address=Plot No:1, Sadarpur, Sector-45, Noida, Uttar Pradesh 201303, India&key="+apikey;
  //url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw" ;

  // https.get(url, function(response) {
  //   console.log(response);
  //   response.on("data", function(data){
  //       // const addressData = JSON.parse(data);
  //       // const temp = addressData.results[0].address_components[0].long_name;
  //       // console.log(temp);
  //
  //
  //   // response.on("data",function(data){
  //   //   console.log(typeof data);
  //   //
  //   //   // const a  = JSON.parse(data);
  //   //    //console.log(a.results[0]);
  //   //   let details = data.toString();
  //   //
  //   //   res.write(details);
  //   //   // let details = JSON.stringify(data.toString());
  //   //   // let det_json = JSON.parse(details);
  //   //   // console.log(det_json.results[0]);
  //   // });
  // });
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})
//***************************************************************************//
// app.post("/",function(req,res){
//
//
//   https.get(url, function(response){
//     response.on("data" , function(data){
//       // const addressData = JSON.parse(data);
//       // const temp = addressData.results[0].address_components[0].long_name;
//       // res.write("temp :-" + temp)
//       // res.send();
//     })
//   })
//
// });
//****************************************************************************//




app.listen(3000 , function(){
  console.log("server started at port 3000");
});
