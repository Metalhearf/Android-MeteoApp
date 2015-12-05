document.addEventListener('deviceready', function(){
	//ici du code au lancement de l'application
}, false)

var app = angular.module('app', ['ngRoute']);

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