const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const unsplash = require('../ext-api/unsplash-api/unsplash.js');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/user.js');

router.get('/', function(req, res){
  let picture = '';
  try {
    unsplash().then(function(result){
      picture = result;
      res.render('../views/pages/index', { picture: picture });
    })
  } catch(err){
    console.log(err);
  }
});

router.get('/signup', function(req, res){
  let picture = '';
  try {
    unsplash().then(function(result){
      picture = result;
      res.render('../views/pages/signup', { picture: picture });
    })
  } catch(err){
    console.log(err);
  }
});

router.get('/signin', function(req, res){
  let picture = '';
  try {
    unsplash().then(function(result){
      picture = result;
      res.render('../views/pages/signin', { picture: picture });
    })
  } catch(err){
    console.log(err);
  }
});

router.get('/findall', function(req, res){
  User.find({})
  .then(users => {
    try {
      console.log("Users " + users);
      res.json(users);
    } catch(err){
      console.log(err);
    }
  });
});


 /*********************************************/

 // Post Routes
 router.post('/register', function(req, res){
   const username = req.body.username;
   const firstname = req.body.firstname;
   const lastname = req.body.lastname;
   const password = req.body.password;
   const password2 = req.body.password2;

   // Form inputs validation
   //req.body('email', 'Email is required').notEmpty();
   //req.body('email', 'Not a valid email address!').isEmail();
   body('username', 'Please choose an username').notEmpty(),
   body('firstname', 'Your first name is required').notEmpty(),
   body('lastname', 'Your last name is required').notEmpty(),
   body('password', 'Please provide a password').notEmpty(),
   body('password2', 'The passwords don\'t match').equals(req.body.password)

   const errors = validationResult(req);

   if(!errors.isEmpty()){
         return res.status(400).json({ errors: errors.array() });
   } else{
     let newUser = {
       username: username,
       firstname: firstname,
       lastname: lastname,
       password: password
     };
     //console.log(newUser);
     //////////////////////////////////////// Save user here!!!!!!!!!!!!
      User.findOne({ username: newUser.username }).then(user => {
        if(user){
          return res.status(400).json({ username: "User already exists" });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              User.create({
                username: newUser.username,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                password: newUser.password
              }, function(err){
                if(err){
                  res.status(500).send('Something bad happened! Try again!');
                } else {
                  res.redirect(200, '/signin');
                }
              });
            });
          });
        }
      });
   }
 });

// Render picture in signup route after failing input validation

module.exports = router;

// let picture = '';
// try {
//   unsplash().then(function(result){
//     picture = result;
//     res.render('../views/pages/signin', { picture: picture });
//   })
// } catch(err){
//   console.log(err);
// }
