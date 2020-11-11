const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const env = require('dotenv').config();
const app = express();
const unsplash = require('./app/ext-api/unsplash-api/unsplash.js');
const ejs = require('ejs');
const mongoose = require('./app/connection/mongoDBConnection.js')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let picture = '';
  try {
    unsplash().then(function(result){
      picture = result;
      res.render('pages/index', { picture: picture });
    })
  } catch(err){
    console.log(err);
  }

});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
