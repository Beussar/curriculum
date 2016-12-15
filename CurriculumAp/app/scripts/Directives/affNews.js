'use strict';
 var app = angular.module("app");

app.directive("visionArt", function(){
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function(){
            var articles = [];
            this.gotOpened = function(selectedArticle){
                articles.forEach(function(article){
                    if(selectedArticle !== article){
                        article.showMe = false;
                    }
                });
            };
            this.addArticle = function(article){
                articles.push(article);
            };
        }
    };
});


app.directive("article", function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: '^?visionArt',
        scope: {title: '=articleTitle'},
        template:  '<div  ng-click="toggle()">'+ "<table ng-transclude>"+
            "<tr>"+
                "<td>{{article.data.articles[1]}} </td>"+
            "</tr>"+
        "</table>"+
        "</div>",
        link: function(scope, element, attrs, visonArtController){
            scope.showMe = false;
            visionArtController.addArticle(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                visionArtController.gotOpened(scope);
            };
        }
    };
});