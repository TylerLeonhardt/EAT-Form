angular
  .module('EAT.snap', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('snap', {
        url: "/snap",
        templateUrl: "features/snap/snap.html",
        controller: 'SnapCtrl'
      })
    ;
  })
  .controller('SnapCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
          }
      }
    }

    $scope.snap = {
      show: function() {
          console.log("showing");
          $("#withCaseNumber").show("slow");
          $("#caseNumber").attr("required", true);
        },
      hide: function() {
        console.log("hiding");
        $("#withCaseNumber").hide("slow");
        $("#caseNumber").removeAttr("required");
      }
    }


      $( function() {
        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
        $scope.snap.hide();
      } );

      $("form").submit(function() {
        if($(this).serializeArray()[0] == undefined) {
          return false;
        }

        console.log($(this).serializeArray()[0]);

        // Store this value
        localStorage.setItem("householdOnSNAP", $(this).serializeArray()[0].value);

        // Take the user to the correct page based on their answer
        if($(this).serializeArray()[0].value == "no") {
          $location.path( "/howmanyadults" );
        } else if($(this).serializeArray()[0].value == "yes") {
          $location.path( "/review" );
        }

        return false;
      });
  }]);
