// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('app', ['ionic', 'ngRoute', 'ngCordova']);

app.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })

  .when('/chart-moyenne', {
    templateUrl: 'views/chart-moyenne.html'
  })

  .when('/chart-fulldata', {
    templateUrl: 'views/chart-fulldata.html'
  })

  .when('/chart-windrose', {
    templateUrl: 'views/chart-windrose.html'
  })

  .when('/about', {
    templateUrl: 'views/about.html'
  })

  .otherwise({ redirectTo: '/home' })
});

app.controller("NavController", function ($scope) {
  $scope.menu = 'home';
});

app.controler("FileController", function ($scope, $ionicLoading) {


});