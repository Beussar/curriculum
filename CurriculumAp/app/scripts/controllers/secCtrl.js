'use strict';
 var app = angular.module("app");

app.controller('secondCtrl', function($scope,variableFactory){
$scope.voir=0;

$scope.affiche=function(){
$scope.voir=1;
}




$scope.$watch(function(){
	return variableFactory.getnomS();},
	function(newValue,oldValue){
		if(newValue !== oldValue)
		$scope.nom=newValue;});


});