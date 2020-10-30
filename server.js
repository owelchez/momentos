const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const env = require('dotenv').config();
const app = express();
const helper = require('./app/ext-api/helpers/helpers.js');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let picture = '';
  helper.getUnsplashPicture()
  .then(function(response){
    picture = response;
  }).then(function(){
    res.render('pages/index', { picture: picture });
  })
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
