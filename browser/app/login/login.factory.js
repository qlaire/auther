'use strict';

app.factory('LoginFactory',function($http,$log){
  var currentUserId=null;
  var currUserIsAdmin = false;
// this works with Google now after fixing the login/me route
// however, zeke@zeke.zeke is only an admin when you refresh. need to put in app.run?
  $http.get('/api/login/me')
  .then(function(res){return res.data})
  .then(function(user){
    currentUserId=user.id;
    currUserIsAdmin=user.isAdmin;
  })
  .catch($log.error);

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
      AppFactory.setIsAdmin(user);
      console.log(currentUserId);
    });
  }

  AppFactory.setIsAdmin=function(user){
    currUserIsAdmin=user.isAdmin;
  }

  AppFactory.clearUserInfo=function(){
    currentUserId=null;
    currUserIsAdmin=false;
  }

  AppFactory.getIsAdmin=function(){
    console.log("user is admin", currUserIsAdmin);
    return currUserIsAdmin;
  }

  AppFactory.logout=function(){
    AppFactory.clearUserInfo();
    return $http.put('/api/logout/');
  }

  AppFactory.setCurrentUserId = function(userId) {
    currentUserId = userId;
  };

  AppFactory.getCurrentUserId = function() {
    return currentUserId;
  };



  AppFactory.checkIfLoggedIn=function(userId){
    console.log("author id", userId);
    console.log("current user", currentUserId);
    return (userId===currentUserId);
  }

  // AppFactory.loadUser=function(){
  //   return $http.get('/api/login/me')
  //   .then(function(res){return res.data})
  //   .then(function(user){
  //     AppFactory.setCurrentUserId(user.id);
  //     AppFactory.setIsAdmin(user);
  //   })
  // }

  return AppFactory;

})