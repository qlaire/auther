'use strict';

app.controller('LoginCtrl',function($scope, LoginFactory, $state, $log){
  console.log('LOGIN CONTROLLER EXISTS$$$$$$$');
  //angular.extend($scope,LoginFactory);
  $scope.submitLogin = function(email, password) {
    LoginFactory.submitLogin(email, password)
    .then(function(response) {
      console.log("response", response);
      $state.go('stories');
    })
    .catch($log.error);
  }

  // $scope.submitLogin=function(){
  //   LoginFactory.submitLogin()
  //   .then(function(){
  //     console.log('success?');
  //     $state.go('stories');
  //   })
  //   .catch($log.error);
  // }
})