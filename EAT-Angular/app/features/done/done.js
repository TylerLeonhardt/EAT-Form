angular
  .module('EAT.done', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('done', {
        url: "/done",
        templateUrl: "features/done/done.html",
        controller: 'DoneCtrl'
      })
    ;
  })
  .controller('DoneCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/about" );
          }
      }
    }

    $( function() {
        var start = 100;
        var mid = 145;
        var end = 250;
        var width = 22;
        var leftX = start;
        var leftY = start;
        var rightX = mid - (width / 2.7);
        var rightY = mid + (width / 2.7);
        var animationSpeed = 15;

        var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
        ctx.lineWidth = width;
        ctx.strokeStyle = '#5EBBA4';

        for (i = start; i < mid; i++) {
            var drawLeft = window.setTimeout(function () {
                ctx.beginPath();
                ctx.moveTo(start, start);
                ctx.lineTo(leftX, leftY);
                ctx.stroke();
                leftX++;
                leftY++;
            }, 1 + (i * animationSpeed) / 3);
        }

        for (i = mid; i < end; i++) {
            var drawRight = window.setTimeout(function () {
                ctx.beginPath();
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(rightX, rightY);
                ctx.stroke();
                rightX++;
                rightY--;
            }, 1 + (i * animationSpeed) / 3);
        }
      } );
  }]);
