'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

// phonecatApp.controller('PhoneListCtrl', function ($scope, $http) { // to use a service, declare dependencies here - this looks up the dependency by name
//   $http.get('phones/phones.json').success(function(data) {
//     $scope.phones = data;
//   });

//   $scope.orderProp = 'age';
// });

// var phonecatApp = angular.module('phonecatApp', []);

//To fix minification issues structure like this with inline annotation

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);


