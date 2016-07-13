'use strict';

app.factory('SignupFactory',function($http){
  var SignupFactory={};
  SignupFactory.submitSignup=function(email,password){
    console.log('in factory submitsignup')
    return $http.post('/api/signup',{email:email,password:password});
  }
  return SignupFactory;

})