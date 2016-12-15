'use strict'
var app = angular
   .module('app', ['ngRoute']);
 



 app.controller('pageCtrl', function($scope, $routeParams) {
      $scope.$name = 'pageCtrl';
    $scope.$routeParams=$routeParams;
 });

app.config(function($routeProvider) {
  $routeProvider
     .when('/page',{
         templateUrl:'views/page.html',
        controller : 'pageCtrl',

    });


});

