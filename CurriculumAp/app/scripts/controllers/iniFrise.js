'use strict';
 var app = angular.module("app");


app.controller("friseCtrl", function($scope){
    $scope.expanders = [

        {title: '2010',
         date:"Janvier - Août ",
         text: 'Baccalauréat Science Technologies et Industriels'},
        
        {title: '2011',
         date:"Juin",
         text: 'Hôte de caisse Auchan (Emploi étudiant, Fin de contrat février 2013)'},
        
        {title: '2012',
         date:'Mai - Juin',
         text: "UDAF Meuse (Stage)"},
        
        {title: '2013',
         date:"Juin",
         text: "BTS: Informatique et Réseaux pour l'Industrie et les Services ",
         date2:"Octobre",
         text2:"Employé dans une ferme écologique (Inde) "  },
        
        {title: '2014',
         date:"Octobre",
         text: "Début d'une année D'Assistant d'éducation collège et lycée ",
         date2:"Juin - Août",
         text2:"Agent contractuel, Direction Départementale des Territoires" },
        
        {title: '2015',
         date:"Juin",
         text: "Fin de l'année D'Assistant d'éducation collège et lycée (Fin de contrat Septembre) "},
        
        {title: '2016',
         date : "Janvier - Août ",
         text: ' Différentes missions en intérim, contrats à la journée, à la semaine ou au mois . Missons varièes dans différents domaines '}
    ];

});