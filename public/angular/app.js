// Define the `noteApp` module
var app = angular.module('noteApp', [])
.controller('NoteCtrl', function noteControl($scope, $http) {
  
  $scope.toggleCreate = "CREATING:";
  $scope.toggleCreateSaveNote = true;
  $scope.toggleNewNote = true;

  $scope.newNote = function() {
    $scope.title = "";
    $scope.text = "";
    $scope.toggleNewNote = true;
  }

  $scope.createNote = function() {
    var note = {
      title : $scope.title,
      text:  $scope.text
    };
    $http({
      method : 'POST',
      url : '/createNote',
      data : note
    }).then(function mySuccess(result) {
      $scope.notes.unshift(result.data)
    });
    $scope.newNote();
  }

  $scope.getNotes = function() {
    $http({
      method : 'GET',
      url : '/getNotes'
    })
    .then(function mySuccess(results) {
      $scope.notes = results.data;
    })
  }

  $scope.editNote = function(note) {
    $scope.title = note.title;
    $scope.text = note.text;
    $scope.id = note.id;
    $scope.toggleCreate = "EDITING:";
    $scope.toggleCreateSaveNote = false;
    $scope.toggleNewNote = false;
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
      $scope.getNotes();
    });
  }

  $scope.deleteNote = function() {
    var note = {
      title: $scope.title,
      text:  $scope.text,
      id: $scope.id
    };
    $http({
      method : 'POST',
      url : '/deleteNote',
      data : note
    }).then(function mySuccess(result) {
      $scope.getNotes();
    });
    $scope.newNote();
  }
});


