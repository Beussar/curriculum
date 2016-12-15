"use strict";
var app =angular.module("app");

app.factory('variableFactory',function(){


var data={
	nom:''
	};

return {
	getnomS:function(){
		return data.nom;
	},
	setnomS:function(nom){
		data.nom=nom;
		console.log(data);
	}
};
	

});