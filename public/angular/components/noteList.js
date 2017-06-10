// angular.module('noteApp')
// .controller('notesListCtrl', function($scope) {
//    $http({
//       method : 'GET',
//       url : '/getNotes',
//       data : results
//     }).then(function mySuccess(result) {
//       console.log('res data' , result)
//     });
// })
// .directive('notesList', function() {
//   return {
//     controller: function() {
//       console.log("notesList controller")
//     },
//     controller: 'notesListCtrl',
//     controllerAs: 'ctrl',
//     bindToController: true,
//     templateUrl: 'notesList.html'
//   };
// });