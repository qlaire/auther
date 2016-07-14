'use strict';

app.controller('SignupCtrl',function($scope,SignupFactory,$log, LoginFactory){
  $scope.submitSignup=function(email,password){
    SignupFactory.submitSignup(email,password)
    .catch($log.error)
  }
})