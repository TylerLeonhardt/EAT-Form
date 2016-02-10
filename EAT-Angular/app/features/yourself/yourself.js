angular
  .module('EAT.yourself', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('yourself', {
        url: "/yourself",
        templateUrl: "features/yourself/yourself.html",
        controller: 'YourselfCtrl'
      })
    ;
  })
  .controller('YourselfCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/howmanychildren" );
          }
      }
    }

    $(".progress-bar").animate({
        width: "20%"
    });

    $( function() {
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");

        var input = document.getElementById('city');
        var options = {componentRestrictions: {country: 'us'}};
        new google.maps.places.Autocomplete(input, options);
    } );
  }]);
