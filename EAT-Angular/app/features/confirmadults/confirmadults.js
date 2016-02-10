angular
  .module('EAT.confirmadults', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('confirmadults', {
        url: "/confirmadults",
        templateUrl: "features/confirmadults/confirmadults.html",
        controller: 'ConfirmAdultsCtrl'
      })
    ;
  })
  .controller('ConfirmAdultsCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/about" );
          }
      }
    }

    $( function() {
        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

        var numAdults = localStorage.getItem("howManyAdultsFormhowManyAdultsFormnumAdults");

        if(numAdults != null) {
          if(+numAdults == 1) {
            $("#desc-heading").html("please confirm the information of the " + (+numAdults)
              + " adult in your household");
          } else {
            $("#desc-heading").html("please confirm the information of the " + (+numAdults)
              + " adults in your household");
          }
        }

        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");

        for(var i = 1; i <= +numAdults; i++) {
          console.log("adult");
          var description = // Child Template
          "<span style='display:block; text-align: left; padding: 6px 10px 6px 10px;'><p style='display: inline; font-weight: 500;'>" +
              localStorage.getItem("aboutAdultsFormaboutAdultsFormfirst_"+i) + " " +
              localStorage.getItem("aboutAdultsFormaboutAdultsFormmi_"+i) + " " +
              localStorage.getItem("aboutAdultsFormaboutAdultsFormlast_"+i) + "</p> ";

            if(localStorage.getItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+i) == ("adult_"+i+"_has_income")) {
              description += "earns:<br/><div style='margin-left: 20px; margin-top: 10px; margin-bottom: 10px; border-left: 2px solid #004E3A; padding-left: 10px;'>"

              for(var income = 1; income <= 4; income++) {
                description += "<h6 style='display: inline;'>" + localStorage.getItem("aboutAdultsFormaboutAdultsFormoption"+income+"_adult_"+i) + " " + localStorage.getItem("aboutChildrenFormaboutChildrenFormfrequency_income_category_"+income+"_child_"+i) + "</h6> from ";

                if(income == 1) description += "<h6 style='display: inline;'>SALARY or WAGE</h6> from a job";
                else if(income == 2) description += "<h6 style='display: inline;'>MILITARY</h6> basic pay or allowance";
                else if(income == 3) description += "<h6 style='display: inline;'>OTHER</h6> income from public assistance, alimony, or child support";
                else if(income == 4) description += "<h6 style='display: inline;'>INVESTMENTS</h6> or any other income";

                description += "<br/> ";
              }

              description += "</div>";
            } else {
              description += "does not earn any income."
            }

            description += "</span>";

          $("#reviewAdults").append(description);
        }

        $("#reviewAdults").append("<a style='width: 50%;border-top-left-radius: 0; border-top-right-radius: 0;' class='btn btn-sm btn-primary btn-proceed' href='#/howmanyadults'>Add or Remove Adult</a>");
        $("#reviewAdults").append("<a style='width: 50%;border-top-left-radius: 0; border-top-right-radius: 0;' class='btn btn-sm btn-primary btn-proceed' href='#/aboutadults'>Edit Adult Information</a>");

      } );
  }]);
