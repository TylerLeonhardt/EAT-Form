angular
  .module('EAT.review', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('review', {
        url: "/review",
        templateUrl: "features/review/review.html",
        controller: 'ReviewCtrl'
      })
    ;
  })
  .controller('ReviewCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/howmanychildren" );
          }
      }
    }

  }]);
