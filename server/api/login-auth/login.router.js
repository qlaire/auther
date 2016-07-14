'use strict';

var router = require('express').Router();
var User = require('../users/user.model');

router.post('/',function(req,res,next){
  var email=req.body.email;
  var password=req.body.password;
  User.findOne({
    where: {email: email, password: password}
  })
  .then(function(user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id; 
      res.status(200).send(user);     
    }
  })
  .catch(next);
});

router.get('/me', function(req, res, next) {
  var userId = req.session.userId;
  User.findById(userId)
  .then(function(user) {
    if (user) {
      res.status(200).send(user);
    }
    res.sendStatus(401);
  })
  .catch(next);
});


module.exports = router;
