'use strict';

var router = require('express').Router();
var User = require('../users/user.model');

router.post('/', function(req, res, next) {
  User.findOne({
    where: {email: req.body.email}
  })
  .then(function(user) {
    if (user) {
      res.sendStatus(409);
    } else {
      return User.create({email: req.body.email, password: req.body.password});
    }
  })
  .then(function(user) {
    console.log(user.id);
    req.session.userId = user.id;
    res.sendStatus(204);
  })
});

module.exports = router;