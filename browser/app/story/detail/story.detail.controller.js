'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, LoginFactory) {
  angular.extend($scope, LoginFactory);
  $scope.story = story;
  $scope.users = users;
  $scope.$watch('story', function () {
    $scope.story.save();
  }, true);
});
