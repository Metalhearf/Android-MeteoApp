var app = angular.module('app', ['ionic', 'ngRoute', 'ngCordova', 'app.controllers']);

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

angular.module('app.controllers', [])
.controller('AppCtrl', function($scope) {

  $scope.filepathChooser = function() {
    window.plugins.mfilechooser.open([], function (uri) {
       //uri = path
    console.log('file path', uri);
    alert(uri);
  }, function (error) {
      console.log('Error', error);
   alert(error);
  });
 };
});

