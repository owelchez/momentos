// const LocalStrategy = require('passport-local').Strategy;
// const bCrypt = require('bCrypt');
//
// // Load User model
// const User = require('../models/user');
//
// module.export = function(passport){
//   passport.use(
//     new LocalStrategy({ usernameField: 'username', (username, password, done) => {
//       // Find username in DB.
//       User.findOne({
//         username: username
//       }).then(user => {
//         if(!user){
//           return done(null, false, { message: 'The username does not exist'});
//         }
//
//         // Match password.
//         bCrypt.compare(password, username.password, (err, isMatch) => {
//           if(err) throw err;
//           if(isMatch){
//             return done(null, user);
//           } else {
//             return done(null, false, { message: 'Password is incorrect' });
//           }
//         });
//       });
//     }})
//   );
//
//   passport.serializeUser(function(user, done){
//     done(null, user.id);
//   });
//
//   passport.deserializeUser(function(user, done){
//     User.findById(id, function(err, user){
//       done(err, user);
//     });
//   });
// };
//
//   passport.deserializeUser(function(id, done){
//     User.findById(id).then(function(user){
//       if(user){
//         done(null, user.get());
//       } else {
//         done(user.errors, null);
//       }
//     });
//   });

  // passport.use('local-signup', new LocalStrategy(
  //   {
  //     username: 'username',
  //     firstname: 'firstname',
  //     lastname: 'lastname',
  //     password: 'password',
  //     passReqToCallback: true
  //   },
  //   function(req, username, firstname, lastname, password, done){
  //     const generateHash = function(password){
  //       return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  //     }
  //       User.findOne({
  //         where: {
  //           username: username
  //         }
  //       }).then(function(user){
  //         if(user){
  //           return done(null, false, { message: 'This username is already used'});
  //         } else {
  //           const userPassword = generateHash(password);
  //           const data = {
  //             username: username,
  //             firstname: req.body.firstname,
  //             lastname: req.body.lastname,
  //             password: userPassword
  //           };
  //
  //           User.create(data).then(function(newUser, created){
  //             if(!newUser){
  //               return done(null, false);
  //             }
  //             if(newUser){
  //               return done(null, newUser);
  //             }
  //           });
  //         }
  //       });
  //   }
  // ));
  //
  // passport.use('local-signin', new LocalStrategy(
  //   {
  //     username: 'username',
  //     password: 'password',
  //     passReqToCallback: true
  //   },
  //   function(req, username, password, done){
  //     let User = user;
  //     const isValidPassword = function(userpass, password){
  //       return bCrypt.compareSync(password, userpass);
  //     }
  //
  //     User.findOne({
  //       where: {
  //         username: username
  //       }
  //     }).then(function(user){
  //       if(!user){
  //         return done(null, false, { message: 'This user does not exist'});
  //       }
  //       if(!isValidPassword(user.password, password)){
  //         return done(null, false, { message: 'Incorrect password'});
  //       }
  //
  //       const userInfo = user.get();
  //
  //       return done(null, userInfo);
  //     }).catch(function(err){
  //       console.log('Error: ', err);
  //       return done(null, false, { message: 'Something is wrong signin in'});
  //     });
  //   }
  // ));
  //



  /* Route for passport.authenticate()
  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
  });
  */
