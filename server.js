const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const env = require("dotenv").config();
const app = express();
//const unsplashPic = require('./app/ext-api/unsplash/unsplash.js');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './app/routes/views/home.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
