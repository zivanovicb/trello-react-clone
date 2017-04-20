var express = require('express');
var router = express.Router();
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

/* AUTH routes */
router.get('/login',
  passport.authenticate('local', {
    successRedirect: '/b',
    failureRedirect: '/a'
  }),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('SUCCESS!')
    res.redirect('/users/' + req.user.username);
  });

module.exports = router;
