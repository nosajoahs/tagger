// Define the `noteApp` module
var noteApp = angular.module('noteApp', []);

noteApp.controller('NoteController', function NoteController($scope, $http) {
  //$scope.note = {};
  $scope.saveNote = function() {
   $http.post('/saveNote', data, config).then(successCallback, errorCallback);
  }
})


