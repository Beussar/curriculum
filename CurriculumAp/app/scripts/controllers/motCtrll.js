'use strict';
 var app = angular.module("app");

 app.controller('motsCtrll', function($scope){

 $scope.bravo='Les mots ne sont pas croisés';

$scope.a='';
$scope.a1='';
$scope.a2='';
$scope.a3='';
$scope.a4='';
$scope.h2='';

$scope.b='';
$scope.b1='';
$scope.b2='';
$scope.b3='';
$scope.b4='';
$scope.h7='';
$scope.b6='';



$scope.c1='';
$scope.c2='';
$scope.c3='';
$scope.h6='';
$scope.c5='';
$scope.c6='';

$scope.h3='';
$scope.d1='';
$scope.d2='';

$scope.h1='';
$scope.h4='';
$scope.h5='';
$scope.h8='';


$scope.fac=0;
$scope.lour=0;
$scope.reseda=0;
$scope.amas=0;
$scope.cri=0;



$scope.aide =function(a,b,c1,d1,h1){
	$scope.a='r';
	$scope.b='a';
	$scope.c1='l';
	$scope.h3='c';
	$scope.h1='f';
};


$scope.veriff =function(a,a1,a2,a3,a4,b,b1,b2,b3,b4,b6,c1,c2,c3,c5,c6,h1,h2,h3,h4,h5,h6,h7,h8,bravo,fac,lour,reseda,amas,cri){






	var rep='reseda';
	var stock=($scope.a + $scope.a1 + $scope.a2+$scope.a3 + $scope.a4 + $scope.h2 );

	var res = 0;
	if(rep===stock){
		  res=res+1;
		  $scope.reseda=1;
		
	}
	
	console.log(res);
	console.log(stock);

	
	var repo='amasser';
	var stock=($scope.b + $scope.b1 + $scope.b2+$scope.b3 + $scope.b4 + $scope.h7 + $scope.b6 );

	if(repo===stock){
		  res=res+1;
		  $scope.amas=1;
		
	}
console.log(res);
console.log(stock);



	var repon='lourde';
	var stock=( $scope.c1 + $scope.c2+$scope.c3 + $scope.h6 + $scope.c5 + $scope.c6 );

	if(repon===stock){
		  res=res+1;
		  $scope.lour=1;
		
	}
console.log(res);
console.log(stock);


	var repons='cri';
	var stock=($scope.h3 + $scope.d1 + $scope.d2);

	if(repons===stock){
		  res=res + 1;
		  $scope.cri=1;
		
	}
console.log(res);
console.log(stock);


 	
	var reponse='factures';
	var stock=($scope.h1 + $scope.h2 + $scope.h3+$scope.h4 + $scope.h5 + $scope.h6 + $scope.h7 + $scope.h8 );

	if(reponse===stock){
		  res=res+1;
		  $scope.fac=1;
		
	}
console.log(res);
console.log(stock);


if(res===5){
	$scope.bravo=" Félicitation ! les mots sont croisés";
}
console.log($scope.bravo);
};

 });
