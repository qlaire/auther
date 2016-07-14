'use strict';

app.controller('SignupCtrl',function($scope,SignupFactory,$log, LoginFactory){
  $scope.submitSignup=function(email,password){
    SignupFactory.submitSignup(email,password)
    .then(function(user){
      console.log("the user is", user);
      console.log('signed up');
      LoginFactory.setCurrentUserId(user.id);
    })
    .catch($log.error)
  }
})