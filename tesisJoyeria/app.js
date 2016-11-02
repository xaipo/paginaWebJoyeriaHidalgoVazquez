'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('MyApp', ['bootstrapLightbox','ngRoute','ngSanitize'])





app.config (function($routeProvider ,$provide){
    //$locationProvider.html5Mode(true);

    $routeProvider.when("/galeria",{templateUrl:"/tesisJoyeria/patrials/todo.html", controller:'GalleryCtrl6'});
    $routeProvider.when("/",{templateUrl:"/tesisJoyeria/patrials/todo.html", controller:'GalleryCtrl6'});
    $routeProvider.when("/anillos",{templateUrl:"/tesisJoyeria/patrials/anillos.html", controller:'GalleryCtrl'});
    $routeProvider.when("/aretes",{templateUrl:"/tesisJoyeria/patrials/aretes.html", controller:'GalleryCtrl2'});
    $routeProvider.when("/aros",{templateUrl:"/tesisJoyeria/patrials/aros.html", controller:'GalleryCtrl3'});
    $routeProvider.when("/dijes",{templateUrl:"/tesisJoyeria/patrials/dijes.html", controller:'GalleryCtrl4'});
    $routeProvider.when("/pulseras",{templateUrl:"/tesisJoyeria/patrials/pulseras.html", controller:'GalleryCtrl5'});


        /*$provide.factory("ApiUrl", function () {
         return {
         urlUsuarios: 'http://localhost:3000/api/usuarios'
         };
         })*/

        //$provide.value('urlUsuarios', 'http://localhost:3000/api/usuarios');







});