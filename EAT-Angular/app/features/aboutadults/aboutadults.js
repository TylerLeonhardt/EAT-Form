angular
  .module('EAT.aboutadults', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('aboutadults', {
        url: "/aboutadults",
        templateUrl: "features/aboutadults/aboutadults.html",
        controller: 'AboutAdultsCtrl'
      })
    ;
  })
  .controller('AboutAdultsCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.login = {
      submit : function(form) {
          if(form.$valid) {
            console.log("submitting");
            $location.path( "/confirmchildren" );
          }
      }
    }

    $scope.aboutAdults = {
      deleteIncome: function(adultId) {
          // Delete income
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormoption1_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormoption2_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormoption3_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormoption4_adult_"+adultId);

          // Delete income time frame
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioOption1_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioOption2_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioOption3_adult_"+adultId);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioOption4_adult_"+adultId);
        },
        show: function(el) {
            console.log("showing ");
            console.log(el);
            $("#" + el).show("slow");

            // Get adult id
            var vals = el.split("_");
            var x = +vals[1];

            // Make visible inputs required
            $(("#adult_"+x+"_income_table input:text")).attr('required', true);
            $(("#adult_"+x+"_income_table input:radio")).attr('required', true);
        },
        hide: function(el) {
            console.log("hiding ");
            console.log(el);
            $("#" + el).hide("slow");

            // Delete the data stored locally
            var vals = el.split("_");
            var x = +vals[1];
            $scope.aboutAdults.deleteIncome(x);

            // Delete data in this form
            $(("#adult_"+x+"_income_table input:text")).val('');
            $(("#adult_"+x+"_income_table input:radio")).attr('checked', false);

            // Make hidden inputs not required
            $(("#adult_"+x+"_income_table input:text")).removeAttr("required");
            $(("#adult_"+x+"_income_table input:radio")).removeAttr("required");
        }
    };

      $( function() {

        $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
        $("#defineAdult").tooltip();

        var numAdults = localStorage.getItem("howManyAdultsFormhowManyAdultsFormnumAdults");

        // Delete old localStorage items (in case we decreased the number of children)
        for(var x = +numAdults+1; x <= 15; x++) {
          console.log("deleting adult " + x);
          // Delete name
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormfirst_"+x);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormlast_"+x);
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormmi_"+x);

          // Delete has income
          localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+x);
        }

        // Add in a row for each adult
        for(var i = 1; i <= numAdults; i++) {
          $("#adultsInfo").append(
            "<div id='adult_" + i + "' class='adult_info well'><div class='form-group col-md-12' style='margin: 0;'>" +
                "<div class='col-sm-3'>" +
                  "<label class='text_label' for='first_" + i + "'>first name</label>" +
                  "<input name='first_" + i + "' type='text' class='form-control' id='first_" + i + "' placeholder='' required='true'>" +
                "</div>" +

                "<div class='col-sm-2' style='width: 70px;'>" +
                  "<label class='text_label' for='mi_" + i + "'>MI</label>" +
                  "<input name='mi_" + i + "' type='text' class='form-control' id='mi_" + i + "' placeholder='' required='true'>" +
                "</div>" +

                "<div class='col-sm-4'>" +
                  "<label class='text_label' for='last_" + i + "'>last name</label>" +
                  "<input name='last_" + i + "' type='text' class='form-control' id='last_" + i + "' placeholder='' required='true'>" +
                "</div>" +
              "</div>" +

              "<div class='form-group col-md-12' style='margin: 0 0 30px 15px;'>" +

                  "<div id='defineIncome_"+i+"' style='color: #333; text-decoration: none;' data-html='true' data-placement='bottom' data-toggle='tooltip' class='bottom' title=\"<span style='font-weight: bold; color: #aab2bd; '>INCOME INCLUDES:</span><br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> earnings from salary, wages, bonuses, self-employment <br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> military basic pay or allowances for off-base housing<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  public assistance<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  college financial aid<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  worker’s compensation<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  unemployment benefits<br/>" +
                    "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> strike benefits<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> pensions<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> annuities<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> trusts or estates<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> disability payments<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> child support<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> interest, dividends, or other investment income<br/>" +
                    "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> rental income<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> regular cash payments from people outside the household<br/>\"" +

                  "<div class='col-sm-12'>" +
                    "<label class='radio-inline'>" +
                      "<input name='radioGroup_adult_" + i + "' id='adult_" + i + "_has_income' value='adult_" + i + "_has_income' type='radio' ng-click='aboutAdults.show(\"adult_"+i+"_income_table\")' required> This adult earns income." +
                    "</label>" +
                    "<label class='radio-inline'>" +
                      "<input name='radioGroup_adult_" + i + "' id='adult_" + i + "_no_income' value='adult_" + i + "_no_income' type='radio' ng-click='aboutAdults.hide(\"adult_"+i+"_income_table\")' required> This adult does <b>not</b> earn income." +
                    "</label>" +
                  "</div>" +
                  "</div>"+

                "<div id='adult_"+i+"_income_table'><table class='table' style='margin-left: 40px; width: 75%;'><tbody>" +

                  // Wages Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>SALARY</h6> or <h6>WAGE</h6> from a job</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option1_adult_" + i + "' type='text' class='form-control' id='option1_adult_" + i + "' placeholder=''>" +
                    "</td>" +
                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_1_adult_" + i + "' name='frequency_income_category_1_adult_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Military
                  "<tr>" +
                    "<td class='amount-label'><span><h6>MILITARY</h6> basic pay or allowance</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option2_adult_" + i + "' type='text' class='form-control' id='option2_adult_" + i + "' placeholder=''>" +
                    "</td>" +
                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_2_adult_" + i + "' name='frequency_income_category_2_adult_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Other Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>OTHER</h6> income from public assistance, alimony, or child support</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option3_adult_" + i + "' type='text' class='form-control' id='option3_adult_" + i + "' placeholder=''>" +
                    "</td>" +
                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_3_adult_" + i + "' name='frequency_income_category_3_adult_" + i + "' class='form-control'>" +
                        "<option value='weekly'>weekly</option>" +
                        "<option value='2x month'>2x month</option>" +
                        "<option value='monthly'>monthly</option>" +
                      "</select>" +
                    "</td>" +
                  "</tr>" +

                  // Investment Income
                  "<tr>" +
                    "<td class='amount-label'><span><h6>INVESTMENTS</h6> or any other income</span></td>" +
                    "<td class='amount-field'>" +
                      "<input name='option4_adult_" + i + "' type='text' class='form-control' id='option4_adult_" + i + "' placeholder=''>" +
                    "</td>" +
                    "<td style='border: none !important;'>" +
                      "<select id='frequency_income_category_4_adult_" + i + "' name='frequency_income_category_4_adult_" + i + "' class='form-control'>" +
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

          if(localStorage.getItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+i) == ("adult_"+i+"_has_income")) {
            $scope.aboutAdults.show("adult_"+i+"_income_table");
          } else {
            $scope.aboutAdults.hide("adult_"+i+"_income_table");
          }

          $("#defineIncome_"+i).tooltip();

          $("#option1_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option2_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option3_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
          $("#option4_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
        }

        // Set the first person to autofill with your name
        $("#first_1").val(localStorage.getItem("signatureFormsignatureFormfirst"));
        $("#mi_1").val(localStorage.getItem("signatureFormsignatureFormmi"));
        $("#last_1").val(localStorage.getItem("signatureFormsignatureFormlast"));

        $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

      } );
  }]);
