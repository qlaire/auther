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
      res.sendStatus(204);     
    }
  })
  .catch(next);
});


module.exports = router;
