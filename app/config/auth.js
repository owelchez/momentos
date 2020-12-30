module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    req.flash('error_msg', 'Login error message here!');
    res.redirect('/signin');
  },
  forwardAuthenticated: function(req, res, next){
    if(!req.isAuthenticated()){
      return next();
    }
    res.redirect('/dashboard');
  }
};
