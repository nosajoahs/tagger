// Define the `noteApp` module
angular.module('noteApp', [])
.controller('NoteCtrl', function NoteController($scope, $http) {
  $scope.saveNote = function() {
    var note = {
      title : $scope.title,
      text:  $scope.text
    }

    $http({
      method : 'POST',
      url : '/saveNote',
      data : note
    }).then(function mySuccess(result) {
      console.log('res data' , result.data)
    })
  $scope.title = "";
  $scope.text = "";
  }
})
.directive('app', function() {
  return {
    controller: 'appCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});

