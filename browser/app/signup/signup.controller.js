'use strict';

app.controller('SignupCtrl',function($scope,SignupFactory,$log){
  console.log('SIGNUP FACTORY THINKS THEREFORE IT IS')
  $scope.submitSignup=function(email,password){
    console.log('SUBMITTING SIGNUP')
    SignupFactory.submitSignup(email,password)
    .then(function(){
      console.log('signed up')
    })
    .catch($log.error)
  }
})