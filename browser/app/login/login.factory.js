'use strict';

app.factory('LoginFactory',function($http,$log){
  var currentUserId;
  
  var AppFactory={};
  
  AppFactory.submitLogin=function(email, password){
    console.log("email and password", email, password);
    return $http.post('/api/login/', {email:email, password:password})
    .then(function(res) {
      console.log('the response', res);
      return res.data;
    })
    .then(function(user) {
      console.log(user);
      AppFactory.setCurrentUserId(user.id);
      console.log(currentUserId);
    });
  }

  AppFactory.logout=function(){
    return $http.put('/api/logout/');
  }

  AppFactory.setCurrentUserId = function(userId) {
    currentUserId = userId;
  };

  AppFactory.getCurrentUserId = function() {
    return currentUserId;
  };

  AppFactory.checkIfAdmin=function(userId){
    $http.get('/api/users/'+userId)
    .then(function(res){
      return res.data;
    })
    .then(function(user){
      return user.isAdmin;
    })
  }

  AppFactory.checkIfLoggedIn=function(userId){
    console.log("author id", userId);
    console.log("current user", currentUserId);
    return (userId===currentUserId);
  }


  return AppFactory;

})