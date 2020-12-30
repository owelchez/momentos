const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const env = require('dotenv').config();
const flash = require('connect-flash');
const ejs = require('ejs');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// I'm using only one db so I use mongoose.connect instead of createConnection
const connection = require('./app/connection/mongoConnection.js');
const User = require('./app/models/user.js');

// Initialize app
const app = express();

// TODO
// Read into res.send()
// Install newly added modules.

// Import our routes
const routes = require('./app/routes/index');
// const users = require('./app/routes/users');

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// View engine and set static folder
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static("public"));
app.set('view engine', 'ejs');

// Passport authentication
app.use(cookieParser());

// Express Session
// app.use(session({
//     secret: 'mazingerz', // I need to move this to environment variable
//     cookie: { maxAge: 60000 },
//     //store: sequelizeSessionStore,
//     saveUninitialized: false,
//     resave: false
// }));

app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

app.use(flash());

// Global variables
// app.use(function(req, res, next){
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

// Use our routes
// const pages = ['/', 'signup', 'signin', 'findall'];
// app.use(pages, require('./app/routes/index.js'));
app.use('/', routes);


const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})

///////////////////////////////////////////////////////////////

// User.find({ username: 'sinmaster'}, function(err, docs){
//   console.log(docs);
//   // I will use this on the login page XD
//   bcrypt.compare('wwww', docs[0].password, function(err, result) {
//       console.log(result);
//   });
// })

// User.deleteMany({}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Success deleting users!");
//   }
// })

// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true || false
// });
