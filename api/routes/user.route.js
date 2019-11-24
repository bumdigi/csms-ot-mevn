const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')
const crypto = require('crypto')
const passport = require('passport')

router.get('/', function(req, res) {
  
});

router.get('/signUp', function(req, res) {
  res.json('signUp', {});
});

router.post('/signUp', passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/signUp',
  failureFlash: true
}))

router.get('/login', function(req, res) {
  res.json('login', {});
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/posts',
  failureFlash: true 
}))

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;