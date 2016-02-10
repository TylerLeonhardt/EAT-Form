angular
  .module('EAT.howmanychildren', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('howmanychildren', {
        url: "/howmanychildren",
        templateUrl: "features/howmanychildren/howmanychildren.html",
        controller: 'HowManyChildrenCtrl'
      })
    ;
  })
  .controller('HowManyChildrenCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
        console.log(form.$valid);
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/allfoster" );
          }
      }
    }

    $(".progress-bar").animate({
        width: "30%"
    });

    $( function() {
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
        $("input[name='numChildren']").TouchSpin({ min: 1, max: 15, initval: 1 });
        $("#defineChild").tooltip();
      } );
  }]);
