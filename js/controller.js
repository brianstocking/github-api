var app = angular.module('github-api');


app.controller('githubCtrl', function ($scope, githubService) {

  $scope.getUserData = function () {
    githubService.getUser($scope.searchText)
      .then(function (data) {
        $scope.user = data
        $scope.searchText = ''
      })

  }

})