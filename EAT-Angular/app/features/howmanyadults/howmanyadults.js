angular
  .module('EAT.howmanyadults', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('howmanyadults', {
        url: "/howmanyadults",
        templateUrl: "features/howmanyadults/howmanyadults.html",
        controller: 'HowManyAdultsCtrl'
      })
    ;
  })
  .controller('HowManyAdultsCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/aboutadults" );
          }
      }
    }

    $( function() {
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

          $("input[name='numAdults']").TouchSpin({ min: 1, max: 15, initval: 1 });
          $("#defineAdult").tooltip();
          $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
      } );
  }]);
