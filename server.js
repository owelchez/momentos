const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const env = require("dotenv").config();
const unsplash = require('./app/ext-api/unsplash/unsplash.js');


const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './app/routes/views/home.html'));
});

console.log(unsplash);


app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
