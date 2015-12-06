document.addEventListener('deviceready', function(){
	//ici du code au lancement de l'application
}, false)

var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

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

app.controller('UploadController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    }
}]);