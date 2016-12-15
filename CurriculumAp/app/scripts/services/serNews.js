'use strict';
 var app = angular.module("app");

 app.factory('httpService', function($http){
 
  var url="https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=f504dcf24cbc47b0a0a55f29c21e6a6d";

return {
   getArticleS: getArticleS
 };
 
function getArticleS(){

return $http.get(url)
   .then(getArticleSComplete);

  function getArticleSComplete(response) {
    console.log(response);
    return response;
  }

}
});