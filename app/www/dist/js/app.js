document.addEventListener('deviceready', function(){
	//ici du code au lancement de l'application
}, false)

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateURL: 'views/home.html'})
		.when('/about', {templateURL: 'views/about.html'})
		.otherwise({redirectTo: '/home'})
});

app.controller("NavController", function ($scope) {
	$scope.menu = "home";
});