"use strict";angular.module("eggsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("eggsApp").controller("MainCtrl",["$scope","Egg",function(a,b){a.eggs=b.query()}]),angular.module("eggsApp").factory("Egg",["$resource",function(a){return a("data/eggs.json",{},{query:{method:"GET",isArray:!0}})}]);