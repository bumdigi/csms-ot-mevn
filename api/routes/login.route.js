const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')
const crypto = require('crypto')
const passport = require('passport')

router.get('/', function(req, res) {
  res.json({
    user: req.user,
    message: req.flash('error')
  });
});

router.get('/signUp', function(req, res) {
  res.json('signUp', {});
});

router.post('/signUp', function(req, res, next) {
  console.log('registering user');
  User.register(({
    username: req.body.user.username, 
    id: req.body.user.id
  }), req.body.user.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');
    res.json({result: 1});
  });
});

router.get('/login', function(req, res) {
  res.status(200).json({
    user: req.user,
    message: req.flash('error')
    });
});

router.post('/login', passport.authenticate('local', {
   failureRedirect: '/login',
    failureFlash: true 
  }), function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;