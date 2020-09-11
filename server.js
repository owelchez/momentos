const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const env = require('dotenv').config();
const app = express();
const unsplashPic = require('./app/ext-api/unsplash/unsplash.js');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('pages/index', { picture: unsplashPic });
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
