const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js');
const crypto = require('crypto');

//login
router.get('/', function(req, res, next){

});

//Sign up
router.post('/signUp', function(req, res, next){
  const user = new User();

  user.id = req.body.user.id;
  user.password = req.body.user.password;
  user.name = req.body.user.name;

  //암호화
  let cipher = crypto.createCipher('aes192', 'key');
  cipher.update(user.password, 'utf8', 'base64');
  let cipherOutput = cipher.final('base64');
  user.password = cipherOutput;

  user.save(function(err){
    if(err){
      console.log(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});

module.exports = router;

//check login
router.post('/checkLogin', function(req, res, next){
  let cipher = crypto.createCipher('aes192', 'key');
  cipher.update(req.body.user.password, 'utf8', 'base64');
  let chipherPW = cipher.final('base64');

  //find user in MongoDB
  User.findOne({id:req.body.user.id, password: chipherPW}, function(err, user){
    //구문 Error
    if(err) return res.status(500).json({error: err});
    //User가 없으면 error
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json(user);
  })
});