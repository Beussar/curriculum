'use strict';
 var app = angular.module("app");

app.directive("frise", function(){
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function(){
            var expanders = [];
            this.gotOpened = function(selectedExpander){
                expanders.forEach(function(expander){
                    if(selectedExpander !== expander){
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
        restrict: 'E',
        replace: true,
        transclude: true,
        require: '^?frise',
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div  class="title" ng-click="toggle()">{{title}}</div>' +
        '<div id="exper" class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs, friseController){
            scope.showMe = false;
            friseController.addExpander(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                friseController.gotOpened(scope);
            };
        }
    };
});