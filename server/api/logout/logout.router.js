'use strict';

var router = require('express').Router();
var User = require('../users/user.model');

router.put('/',function(req,res,next){
  req.session.destroy();
  res.sendStatus(204);     
});


module.exports = router;
