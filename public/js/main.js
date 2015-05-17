(function() {
  var app = angular.module('people', []);

  app.controller('PeopleController', function($http, $scope) {
    $http.get('./people.json')
      .success(function(data) {
        $scope.people = data.people;
    });
  });
})();


