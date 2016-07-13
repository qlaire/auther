'use strict';

app.factory('LoginFactory',function($http,$log){
  var AppFactory={};
  
  AppFactory.submitLogin=function(email, password){
    console.log("email and password", email, password);
    return $http.post('/api/login/', {email:email, password:password});
  }

  AppFactory.logout=function(){
    return $http.put('/api/logout/');
  }

  return AppFactory;

})