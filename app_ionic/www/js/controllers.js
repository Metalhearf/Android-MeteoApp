angular.module('app.controllers', [])
.controller('AppCtrl', function($scope) {

  $scope.filepathChooser = function() {
    window.plugins.mfilechooser.open([], function (uri) {
       //Here uri provides the selected file path.
    console.log('file path', uri);
    alert(uri);
  }, function (error) {
      console.log('Error', error);
   alert(error);
  });
 };
});


