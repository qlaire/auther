'use strict';

app.factory('SignupFactory',function($http,LoginFactory){
  var SignupFactory={};
  SignupFactory.submitSignup=function(email,password){
    console.log('in factory submitsignup')
    return $http.post('/api/signup',{email:email,password:password})
    .then(function(response) {
      console.log("the response is", response);
      return response.data;
    })
    .then(function(user){
        LoginFactory.setCurrentUserId(user.id);   
    })
  }
  return SignupFactory;

})