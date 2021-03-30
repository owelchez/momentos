const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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

router.post('/deleteall', function(req, res){
  User.deleteMany({}, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Success deleting users!");
      res.render('');
    }
  })
});

 /*********************************************/

router.post(
  '/register',
  // Form inputs validation
  //req.body('email', 'Email is required').notEmpty();
  //req.body('email', 'Not a valid email address!').isEmail();
  body('username', 'Please choose a username').notEmpty(),
  body('firstname', 'Your first name is required').notEmpty(),
  body('lastname', 'Your last name is required').notEmpty(),
  body('password', 'Please provide a password').notEmpty(),
  body('password2').custom((value, {req}) => {
    if(value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
  (req, res) => {
    // const inputName = req.body;
    // console.log(inputName);

    const errors = validationResult(req);
    let errorsArray = errors.array();
    for(i=0; i<errorsArray.length; i++){
      console.log(errorsArray[i].msg);
    }
    if(errorsArray){
        let picture = '';
        try {
          unsplash().then(function(result){
            picture = result;
            if(picture){
              res.render('../views/pages/signup', { picture: picture, error_msg: errorsArray });
            }
          })
        } catch(err){
          console.log(err);
        }
    } else {
      let newUser = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
      };
      console.log("This is newUser " + newUser);
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
                  let picture = '';
                  try {
                    unsplash().then(function(result){
                      picture = result;
                      res.redirect(200, '../views/pages/signin', { picture: picture, success_msg: "You've signed up successfully" });
                    })
                  } catch(err){
                    console.log(err);
                  }
                }
              });
            });
          });
        }
      });
    }


});

// Here we authenticate to '/login' POST request used by our login form
  router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
  });

  function isLoggedIn(req, res, next) {
		if(req.isAuthenticated())
			return next();
			res.redirect('/signin');
	}

// Render picture in signup route after failing input validation

module.exports = router;
