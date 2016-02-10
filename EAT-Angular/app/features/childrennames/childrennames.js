angular
  .module('EAT.childrennames', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('childrennames', {
        url: "/childrennames",
        templateUrl: "features/childrennames/childrennames.html",
        controller: 'ChildrenNamesCtrl'
      })
    ;
  })
  .controller('ChildrenNamesCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/review" );
          }
      }
    }

    $scope.childrenNames = {
      deleteIncome: function(childId) {
          // Delete income
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormoption1_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormoption2_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormoption3_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormoption4_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormoption5_child_"+childId);

          // Delete income time frame
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioOption1_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioOption2_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioOption3_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioOption4_child_"+childId);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioOption5_child_"+childId);
        },

        show: function(el) {
            console.log("showing ");
            console.log(el);
            $("#" + el).show("slow");

            // Get child id
            var vals = el.split("_");
            var x = +vals[1];

            // Make inputs required
            $(("#child_"+x+"_income_table input:text")).attr("required", true);
            $(("#child_"+x+"_income_table input:radio")).attr("required", true);
        },
        hide: function(el) {
            console.log("hiding ");
            console.log(el);
            $("#" + el).hide("slow");

            // Delete the data stored locally
            var vals = el.split("_");
            var x = +vals[1];
            $scope.childrenNames.deleteIncome(x);

            // Delete data in this form
            $(("#child_"+x+"_income_table input:text")).val('');
            $(("#child_"+x+"_income_table input:radio")).attr('checked',false);

            // Make hidden inputs not required
            $(("#child_"+x+"_income_table input:text")).removeAttr("required");
            $(("#child_"+x+"_income_table input:radio")).removeAttr("required");
        }
    };

      $( function() {

        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
        $("#defineChild").tooltip();

        var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");

        // Delete old localStorage items (in case we decreased the number of children)
        for(var x = +numChildren+1; x <= 15; x++) {
          // Delete name
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormfirst_"+x);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormlast_"+x);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormmi_"+x);

          // Delete status
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormis_foster_child_"+x);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormis_student_child_"+x);
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormis_hmr_child_"+x);

          // Delete has income
          localStorage.removeItem("aboutChildrenFormaboutChildrenFormradioGroup_child_"+x);

          // Delete income
          $scope.childrenNames.deleteIncome(x);
        }

        // Add in a row for each child
        for(var i = 1; i <= numChildren; i++) {
          $("#childrenInfo").append(
            "<div id='child_" + i + "' class='child_name well'><div class='form-group col-md-12' style='margin: 0;'>" +
                "<div class='col-sm-3'>" +
                  "<label class='text_label' for='first_" + i + "'>first name</label>" +
                  "<input name='first_" + i + "' type='text' class='form-control' id='first_" + i + "' placeholder='' required='true'>" +
                "</div>" +

                "<div class='col-sm-1' style='width: 40px; padding: 0;'>" +
                  "<label class='text_label' for='mi_" + i + "'>MI</label>" +
                  "<input name='mi_" + i + "' type='text' class='form-control' id='mi_" + i + "' placeholder='' required='true'>" +
                "</div>" +

                "<div class='col-sm-3'>" +
                  "<label class='text_label' for='last_" + i + "'>last name</label>" +
                  "<input name='last_" + i + "' type='text' class='form-control' id='last_" + i + "' placeholder='' required='true'>" +
                "</div>" +
              "</div>" +
              "</div>" +
            "</div>"
          );
        }

        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

        $( window ).load(function() {
          $(".progress-bar").delay(500).animate({
              width: "40%"
          });
        });

      } );
  }]);
