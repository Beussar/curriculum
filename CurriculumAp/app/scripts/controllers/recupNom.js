'use strict';
var app = angular.module("app");
 



app.controller("nomCtrl", function($scope,variableFactory) {
    
    $scope.nom='';
variableFactory;

$scope.$watch('nom',function(newValue, oldValue){
	if(newValue !== oldValue)
		variableFactory.setnomS(newValue);
});



});