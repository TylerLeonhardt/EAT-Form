angular
  .module('EAT.confirmchildren', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('confirmchildren', {
        url: "/confirmchildren",
        templateUrl: "features/confirmchildren/confirmchildren.html",
        controller: 'ConfirmChildrenCtrl'
      })
    ;
  })
  .controller('ConfirmChildrenCtrl', ['$scope', '$location', function($scope, $location) {

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

        var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");

        if(numChildren != null) {
          if(+numChildren == 1) {
            $("#desc-heading").html("please confirm the information of the " + (+numChildren)
              + " child in your household");
          } else {
            $("#desc-heading").html("please confirm the information of the " + (+numChildren)
              + " children in your household");
          }
        }

        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");

        for(var i = 1; i <= +numChildren; i++) {
          console.log("child");
          var description = // Child Template
          "<span style='display:block; text-align: left; padding: 6px 10px 6px 10px;'><p style='display: inline; font-weight: 500;'>" +
              localStorage.getItem("aboutChildrenFormaboutChildrenFormfirst_"+i) + " " +
              localStorage.getItem("aboutChildrenFormaboutChildrenFormmi_"+i) + " " +
              localStorage.getItem("aboutChildrenFormaboutChildrenFormlast_"+i) + "</p> is a ";

            if(localStorage.getItem("aboutChildrenFormaboutChildrenFormis_hmr_child_"+i) == "true") {
              description += "homeless, migrant, or runaway "
            }

            if(localStorage.getItem("aboutChildrenFormaboutChildrenFormis_foster_child_"+i) == "true") {
              description += "foster "
            }

            if(localStorage.getItem("aboutChildrenFormaboutChildrenFormis_student_child_"+i) == "true") {
              description += "student "
            }

            if(localStorage.getItem("aboutChildrenFormaboutChildrenFormradioGroup_child_"+i) == ("child_"+i+"_has_income")) {
              description += "who earns:<br/><div style='margin-left: 20px; margin-top: 10px; margin-bottom: 10px; border-left: 2px solid #004E3A; padding-left: 10px;'>"

              for(var income = 1; income <= 5; income++) {
                description += "<h6 style='display: inline;'>" + localStorage.getItem("aboutChildrenFormaboutChildrenFormoption"+income+"_child_"+i) + " " + localStorage.getItem("aboutChildrenFormaboutChildrenFormfrequency_income_category_"+income+"_child_"+i) + "</h6> from ";

                if(income == 1) description += "<h6 style='display: inline;'>SALARY or WAGE</h6> from a job";
                else if(income == 2) description += "<h6 style='display: inline;'>SOCIAL SECURITY</h6> because of their own disability or blindness";
                else if(income == 3) description += "<h6 style='display: inline;'>SOCIAL SECURITY</h6> because their parent is disabled, retired, or deceased";
                else if(income == 4) description += "<h6 style='display: inline;'>REGULAR</h6> spending money from a person outside the household";
                else if(income == 5) description += "<h6 style='display: inline;'>OTHER</h6> income such as from a pension fund, annuity, or trust";

                description += "<br/> ";
              }

              description += "</div>";
            } else {
              description += "who does not earn any income."
            }

            description += "</span>";

          $("#reviewChildren").append(description);
        }

        $("#reviewChildren").append("<a style='width: 50%;border-top-left-radius: 0; border-top-right-radius: 0;' class='btn btn-sm btn-primary btn-proceed' href='#/howmanychildren'>Add or Remove Child</a>");
        $("#reviewChildren").append("<a style='width: 50%;border-top-left-radius: 0; border-top-right-radius: 0;' class='btn btn-sm btn-primary btn-proceed' href='#/aboutchildren'>Edit Child Information</a>");

      } );
  }]);
