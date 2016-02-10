angular
  .module('EAT.allfoster', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('allfoster', {
        url: "/allfoster",
        templateUrl: "features/allfoster/allfoster.html",
        controller: 'AllFosterCtrl'
      })
    ;
  })
  .controller('AllFosterCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
          }
      }
    }

    $('.btn-group').button();

      $( function() {
        if(localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren") != null) {
          var nc = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");
          if(nc == 1) {
            $("#desc-heading").html("is the " + nc + " child in your household a foster child and currently in school?");
          } else {
            $("#desc-heading").html("are all " + nc + " children in your household foster children and currently in school?");
          }
        }
        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
      } );

      $("form").submit(function() {
        if($(this).serializeArray()[0] == undefined) {
          return false;
        }

        console.log($(this).serializeArray()[0]);

        // Store this value
        localStorage.setItem("allFosterChildren", $(this).serializeArray()[0].value);

        // Take the user to the correct page based on their answer
        if($(this).serializeArray()[0].value == "no") {
          $location.path( "/aboutchildren" );

          // Delete foster records for all children, so they can be explictly set
          var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");

          for(var i = 1; i <= +numChildren; i++) {
            localStorage.setItem("aboutChildrenFormaboutChildrenFormis_foster_child_"+i, "false");
          }
        } else if($(this).serializeArray()[0].value == "yes") {
          // Store that all children are foster
          var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");

          for(var i = 1; i <= +numChildren; i++) {
            localStorage.setItem("aboutChildrenFormaboutChildrenFormis_foster_child_"+i, "true");
          }

          $location.path( "/childrennames" );
        }

        return false;
      });
  }]);
