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
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/');
      });
      res.status(200).send(user);     
    }
  })
  .catch(next);
});
// are we doing this route properly? something is wrong with the results of our get request in login.factory.js
router.get('/me', function(req, res, next) {
  var user = req.session.user;
  if (user) {
    res.status(200).send(user);
  } else {
    res.sendStatus(401);
  }
});


module.exports = router;
