'use strict';

app.directive('navbar', function ($state, $location,LoginFactory) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.logout=function(){
        console.log('trying to log out');
        LoginFactory.logout();
        console.log('logged out');
      };
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
    }
  }
});
