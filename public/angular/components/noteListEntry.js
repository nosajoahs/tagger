angular.module('video-player')
.controller('videoListEntryCtrl', function () {

})
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      select: '<'
    },
    controller: 'videoListEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
