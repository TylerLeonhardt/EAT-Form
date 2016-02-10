angular
  .module('EAT.ssn', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ssn', {
        url: "/ssn",
        templateUrl: "features/ssn/ssn.html",
        controller: 'SSNCtrl'
      })
    ;
  })
  .controller('SSNCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
        console.log("huh")
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/review" );
          }
      }
    }

    $( function() {
        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
      } );
  }]);
