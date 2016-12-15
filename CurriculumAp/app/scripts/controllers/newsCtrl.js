'use strict';
 var app = angular.module("app");

app.controller('httpCtrl', function($scope,httpService){
 
      
     $scope.article=[];
     $scope.val=0;




function getArticle(){

     return httpService.getArticleS().then(function(data) {
            $scope.article = data;
            console.log($scope.article.data.articles[1].publishedAt);



      });
};

       $scope.viewarticle=function(val){
        getArticle(); 
        $scope.val=1; 
          for(var i=0; i===10;i++){
           return  $scope.article.data.articles[i];      
      };
    
      
    	};
});
