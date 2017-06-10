// Define the `noteApp` module
var app = angular.module('noteApp', [])
.controller('NoteCtrl', function noteControl($scope, $http) {
  
  $http({
      method : 'GET',
      url : '/getNotes'
    })
    .then(function mySuccess(results) {
      $scope.notes = results.data;
      console.log($scope.notes)
    });

  $scope.saveNote = function(note) {
    console.log(note)
    var note = {
      title : $scope.title,
      text:  $scope.text
    };
    $http({
      method : 'POST',
      url : '/saveNote',
      data : note
    }).then(function mySuccess(result) {
      console.log('res data' , result.data)
      $scope.notes.unshift(result.data)
    });
    $scope.title = "";
    $scope.text = "";
  }

  $scope.editNote = function(note) {
    console.log(note)
    $scope.title = note.title;
    $scope.text = note.text;
  }

  $scope.updateNote = function(note) {
    var note = {
      title: $scope.title,
      text: $scope.text,
      id: $scope.id
    };
    $http({
      method : 'POST',
      url : '/updateNote',
      data : note
    }).then(function mySuccess(result) {
      console.log('res data' , result)
      //$scope.notes.unshift(result.data)
    });
  }

  $scope.deleteNote = function() {
    var note = {
      title: $scope.title,
      text:  $scope.text,
      id: $scope.id
    };
    $http({
      method : 'DELETE',
      url : '/deleteNote',
      data : note
    }).then(function mySuccess(result) {
      console.log('res data' , result.data)
    });
    $scope.title = "";
    $scope.text = "";
  }



})

// .directive('app', function() {
//   return {
//     controller: 'appCtrl',
//     controllerAs: 'ctrl',
//     bindToController: true,
//     templateUrl: 'public/angular/templates/app.html'
//   };
// });

