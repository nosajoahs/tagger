angular.module('noteApp')
.controller('notesListCtrl', function() {
  
})
.directive('notesList', function() {
  return {
    controller: function() {
      console.log("notesList controller")
    },
    controller: 'notesListCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'notesList.html'
  };
});