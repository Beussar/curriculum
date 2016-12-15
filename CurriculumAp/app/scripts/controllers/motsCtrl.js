'use strict';
 var app = angular.module("app");

 app.controller('motsCtrl', function($scope){


$scope.inspire=[];
$scope.precis=[];
$scope.engage=[];
$scope.appli=[];
$scope.systeme=[];


$scope.inspVu=0;
$scope.preVu=0;
$scope.engaVu=0;
$scope.appliVu=0;
$scope.sysVu=0;
$scope.feli=0;


 $scope.vu = 0;
$scope.changer=function(vu){
	

	if($scope.vu===0){
		$scope.vu=1
	}else{
		$scope.vu=0
	}
}



$scope.aide =function(inspire,engage,precis,appli,systeme){
	$scope.appli[4]='i';
	$scope.appli[9]='o';
	$scope.precis[1]='r';
	$scope.engage[0]='e';
	$scope.systeme[0]='s';
	$scope.inspire[4]='i';
};
	





$scope.verif=function(inspire,precis,engage,appli,systeme,inspVu,preVu,engaVu,appliVu,sysVu,feli){



	var re=['s','y','s','t','e','m','e'];
	var res=['i','n','s','p','i','r','e'];
	var resu=['p','r','e','c','i','s'];
	var resul=['e','n','g','a','g','e'];
	var result=['a','p','p','l','i','c','a','t','i','o','n'];
		
	var flag=0;
	var mark=0;
	var val=0;
	var reper=0;
	var marq=0;


	$scope.engage[3]=$scope.appli[0];

	$scope.inspire[2]=$scope.systeme[0];
	$scope.inspire[4]=$scope.appli[4];

	$scope.precis[2]=$scope.systeme[4];
	$scope.precis[4]=$scope.appli[8];




for (var i = 0; i<$scope.appli.length; i++) {



	if (result[i]===$scope.appli[i]) {		
				flag=flag+1;
				//flag : 11
	}
};


for (var i = 0; i<$scope.inspire.length; i++) {
	if($scope.inspire[i]===res[i]){
		mark=mark+1;
		//mark :7
	}
};

for (var i = 0; i<$scope.engage.length; i++) {	
	if ($scope.engage[i]===resul[i]) {
		val=val+1;
		//val :6
	}
};

for (var i = 0; i<$scope.precis.length; i++) {
	if ($scope.precis[i]===resu[i]) {
		reper=reper+1;
		//reper : 6
	}
};

for (var i = 0; i<$scope.systeme.length; i++) {
	if ($scope.systeme[i]===re[i]) {
		marq=marq+1
		// marq: 7
	}
};

	$scope.appliVu=flag;
	$scope.engaVu=val;
	$scope.inspVu=mark;
	$scope.preVu=reper;
	$scope.sysVu=marq;


	if(flag===11&&mark===7&&reper===6&&val===6&&marq===7){
		console.log("oui");
		var final=flag+mark+reper+val+marq;
		console.log(final);
		$scope.feli=final;
	}else{
		console.log("non");
		var final=flag+mark+reper+val+marq;
		console.log(final);
	}

};








 });

