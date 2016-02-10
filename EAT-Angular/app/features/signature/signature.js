angular
  .module('EAT.signature', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('signature', {
        url: "/signature",
        templateUrl: "features/signature/signature.html",
        controller: 'SignatureCtrl'
      })
    ;
  })

  .controller('SignatureCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/yourself" );
          }
      }
    }

    $(".progress-bar").animate({
        width: "10%"
    });

    $( function() {
            $("#signatureForm").bind('click', function() {
              console.log("clicked");
              localStorage.setItem("signatureTimestamp", new Date().toJSON());
            });

            $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
    } );
  }]);
