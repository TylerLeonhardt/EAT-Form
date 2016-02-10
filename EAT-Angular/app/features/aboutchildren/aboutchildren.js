angular
  .module('EAT.aboutchildren', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('aboutchildren', {
        url: "/aboutchildren",
        templateUrl: "features/aboutchildren/aboutchildren.html",
        controller: 'AboutChildrenCtrl'
      })
    ;
  })
  .controller('AboutChildrenCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/snap" );
          }
      }
    }

    $scope.aboutChildren = {
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
            $scope.aboutChildren.deleteIncome(x);

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
          $scope.aboutChildren.deleteIncome(x);
        }

        // Add in a row for each child
        for(var i = 1; i <= numChildren; i++) {
          $("#childrenInfo").append(
            "<div id='child_" + i + "' class='child_info well'><div class='form-group col-md-12' style='margin: 0;'>" +
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

                "<div class='col-sm-5' style='margin-top: 16px;'>" +
                  "<label>" +
                    "<input name='is_student_child_" + i + "' id='is_student_child_" + i + "' value='is_student_child_" + i + "' type='checkbox'><span class='check-label'>student</span>" +
                  "</label>" +
                  "<label style='margin-left: 15px;'>" +
                    "<input name='is_foster_child_" + i + "' id='is_foster_child_" + i + "' value='is_foster_child_" + i + "'type='checkbox'><span class='check-label'>foster</span>" +
                  "</label>" +
                  "<label>" +
                    "<input name='is_hmr_child_" + i + "' id='is_hmr_child_" + i + "' value='is_hmr_child_" + i + "' type='checkbox'><span class='check-label'>homeless, migrant, or runaway</span>" +
                  "</label>" +
                "</div>" +
              "</div>" +

              "<div class='form-group col-md-12' style='margin: 0 0 30px 15px;'>" +

              "<div id='defineIncome_"+i+"' style='color: #333; text-decoration: none;' data-html='true' data-placement='bottom' data-toggle='tooltip' href='#' class='bottom' title=\"<span style='font-weight: bold; color: #aab2bd; '>INCOME INCLUDES:</span><br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> earnings from work<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security benefits for the child’s disability<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security benefits because a parent is disabled, retired, or deceased<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  pension income<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> trust income<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> annuity income<br/>" +
                "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> regular income, including spending money, from a relative or friend outside the household<br/>\"" +
                "<div class='col-sm-12'>" +

                  "<label class='radio-inline'>" +
                    "<input name='radioGroup_child_" + i + "' id='child_" + i + "_has_income' value='child_" + i + "_has_income' type='radio' ng-click='aboutChildren.show(\"child_"+i+"_income_table\")' required> This child earns income." +
                  "</label>" +
                  "<label class='radio-inline'>" +
                    "<input name='radioGroup_child_" + i + "' id='child_" + i + "_no_income' value='child_" + i + "_no_income' type='radio' ng-click='aboutChildren.hide(\"child_"+i+"_income_table\")' required> This child does <b>not</b> earn income." +
                  "</label>" +
                "</div>" +
                "</div>" +

                "<div id='child_"+i+"_income_table'><table class='table' style='margin-left: 40px; width: 75%;'><tbody>" +

                  // Wages Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>SALARY</h6> or <h6>WAGE</h6> from a job</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option1_child_" + i + "' type='text' class='form-control' id='option1_child_" + i + "' placeholder=''>" +
                    "</td>" +
                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_1_child_" + i + "' name='frequency_income_category_1_child_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Child SS Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>SOCIAL SECURITY</h6> income from child’s own disability or blindness</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option2_child_" + i + "' type='text' class='form-control' id='option2_child_" + i + "' placeholder=''>" +
                    "</td>" +

                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_2_child_" + i + "' name='frequency_income_category_2_child_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Parent SS Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>SOCIAL SECURITY</h6> income because parent is disabled, retired, or deceased</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option3_child_" + i + "' type='text' class='form-control' id='option3_child_" + i + "' placeholder=''>" +
                    "</td>" +

                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_3_child_" + i + "' name='frequency_income_category_3_child_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Regular Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>REGULAR</h6> spending money from a person outside the household</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option4_child_" + i + "' type='text' class='form-control' id='option4_child_" + i + "' placeholder=''>" +
                    "</td>" +

                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_4_child_" + i + "' name='frequency_income_category_4_child_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Other Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>OTHER</h6> income such as from a pension fund, annuity, or trust</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option5_child_" + i + "' type='text' class='form-control' id='option5_child_" + i + "' placeholder=''>" +
                    "</td>" +

                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_5_child_" + i + "' name='frequency_income_category_5_child_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +
                "</tbody></table></div>" +
              "</div>" +
              "</div>" +
            "</div>"
          );

          if(localStorage.getItem("aboutChildrenFormaboutChildrenFormradioGroup_child_"+i) == ("child_"+i+"_has_income")) {
            $scope.aboutChildren.show("child_"+i+"_income_table");
          } else {
            $scope.aboutChildren.hide("child_"+i+"_income_table");
          }

          $("#option1_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option2_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option3_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option4_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option5_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});

          $("#defineIncome_"+i).tooltip();
        }

        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

      } );
  }]);
