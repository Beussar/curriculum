'use strict'
var app = angular.module("app", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World",
     $scope.age = 0;


    $scope.majeurOrMineurText = function(){
        return ($scope.age >= 18) ? "majeur" : "mineur";    };

});

app.controller("SomeController", function($scope){
    $scope.expanders = [

        {title: '2016'},
         {text: 'Mission intérim'},
        {title: '2015',
         text: 'Assistant déducation'},
        {title: '2014',
         text: 'ouhbda '},
         {title: '2013',
         text: 'ouhbdasdgsdgfsdgsgsg '},
         {title: '2012',
         text: 'ouhbdasdgsdgfsdgsgsg '},
         {title: '2011',
         text: 'ouhbdasdgsdgfsdgsg sgouhbdasdgsdgfsdgsgsg  ouhbdasdgsdgfs dgsgsgouhbd asdgsdgfsdgsgsgv ouhbdasdgsdgfsdgsg sgouhbdasdgsdgfsdgsgsg  ouhbdasdgsdgfs dgsgsgouhbd asdgsdgfsdgsgsgv '}
    ];

});

app.directive("accordion", function(){
    return{
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function(){
            var expanders = [];
            this.gotOpened = function(selectedExpander){
                expanders.forEach(function(expander){
                    if(selectedExpander != expander){
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function(expander){
                expanders.push(expander);
            };
        }
    };
});

app.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div  class="title" ng-click="toggle()">{{title}}</div>' +
        '<div id="exper" class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs, accordionController){
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            };
        }
    };
});


app.controller("SudoCtrl", function($scope){

 $scope.nb='';
 $scope.nb1='';
 $scope.nb2='';
 $scope.nb3='';
  $scope.nb4='';
    $scope.nb5='';
      $scope.nb6='';
        $scope.nb7='';
        // console.log("Nb="+ Nb);
console.log("nb ="+$scope.nb);
//  $scope.Verifs = function(){
    // if ($scope.nb!='3') {
    //   return ''c;
    // } else {
    //   return 'false';
    // }
  
// 	return if($scope.Nb = 3){'vrai'} else {'faux'};
	
	 



// $scope.Nb=0;

// $scope.Verif =function(){

// 	 //return ($scope.Nb = 3) ? "4" : "Faux";	
// 	 if($scope.Nb = 3){
// return $scope.Nb = 6;
// };

// $scope.Verifs=[];
// if($scope.Nb != 3){
// 	//return $scope.Nb = 4;
// 	return $scope.Nb=4;
//};





});

