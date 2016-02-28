// Create a global namespace
var EAT = EAT || {};

EAT.templates = {
  generateChildSummary: function(i) {
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

      return description;
  },
  
  generateAdultSummary: function(i) {
    var description = "<span style='display:block; text-align: left; padding: 6px 10px 6px 10px;'><p style='display: inline; font-weight: 500;'>" +
        localStorage.getItem("aboutAdultsFormaboutAdultsFormfirst_"+i) + " " +
        localStorage.getItem("aboutAdultsFormaboutAdultsFormmi_"+i) + " " +
        localStorage.getItem("aboutAdultsFormaboutAdultsFormlast_"+i) + "</p> ";

      if(localStorage.getItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+i) == ("adult_"+i+"_has_income")) {
        description += "earns:<br/><div style='margin-left: 20px; margin-top: 10px; margin-bottom: 10px; border-left: 2px solid #004E3A; padding-left: 10px;'>"

        for(var income = 1; income <= 4; income++) {
          description += "<h6 style='display: inline;'>" + localStorage.getItem("aboutAdultsFormaboutAdultsFormoption"+income+"_adult_"+i) + " " + localStorage.getItem("aboutAdultsFormaboutAdultsFormfrequency_income_category_"+income+"_adult_"+i) + "</h6> from ";

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

      return description;
  },

  generateChild: function(nameonly, i) {
    if(nameonly) {
      return "<div id='child_" + i + "' class='child_name well'><div class='form-group col-md-12' style='margin: 0;'>" +
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
            "<label style='margin-left: 15px;'>" +
              "<input name='is_headstart_child_" + i + "' id='is_headstart_child_" + i + "' value='is_headstart_child_" + i + "'type='checkbox'><span class='check-label'>Head Start</span>" +
            "</label>" +
            "<label>" +
              "<input name='is_homeless_child_" + i + "' id='is_homeless_child_" + i + "' value='is_homeless_child_" + i + "' type='checkbox'><span class='check-label'>homeless</span>" +
            "</label>" +
            "<label style='margin-left: 15px;'>" +
              "<input name='is_migrant_child_" + i + "' id='is_migrant_child_" + i + "' value='is_migrant_child_" + i + "' type='checkbox'><span class='check-label'>migrant</span>" +
            "</label>" +
            "<label style='margin-left: 15px;'>" +
              "<input name='is_runaway_child_" + i + "' id='is_runaway_child_" + i + "' value='is_runaway_child_" + i + "' type='checkbox'><span class='check-label'>runaway</span>" +
            "</label>" +
          "</div>" +
        "</div>" +
        "</div>" +
      "</div>";
    } else {
      return "<div id='child_" + i + "' class='child_info well'><div class='form-group col-md-12' style='margin: 0;'>" +
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
            "<label style='margin-left: 15px;'>" +
              "<input name='is_headstart_child_" + i + "' id='is_headstart_child_" + i + "' value='is_headstart_child_" + i + "'type='checkbox'><span class='check-label'>Head Start</span>" +
            "</label>" +
            "<label>" +
              "<input name='is_hmr_child_" + i + "' id='is_hmr_child_" + i + "' value='is_hmr_child_" + i + "' type='checkbox'><span class='check-label'>homeless, migrant, or runaway</span>" +
            "</label>" +
          "</div>" +
        "</div>" +

        "<div class='form-group col-md-12' style='margin: 0 0 30px 15px;'>" +

        "<div id='defineIncome_"+i+"' style='color: #333; text-decoration: none;' data-html='true' data-placement='bottom' data-toggle='tooltip' href='#' class='bottom' title=\"<span style='font-weight: bold; color: #aab2bd; '>INCOME INCLUDES:</span><br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> earnings from work<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security benefits for the child’s disability<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security benefits because a parent is disabled, retired, or deceased<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  pension income<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> trust income<br/>" +
        "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> annuity income<br/>" +
          "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> regular income, including spending money, from a relative or friend outside the household<br/>\"" +
          "<div class='col-sm-12'>" +

            "<label class='radio-inline'>" +
              "<input name='radioGroup_child_" + i + "' id='child_" + i + "_has_income' value='child_" + i + "_has_income' type='radio' onclick='EAT.aboutChildren.showIncomeTable(\"child_"+i+"_income_table\")' required> This child earns income." +
            "</label>" +
            "<label class='radio-inline'>" +
              "<input name='radioGroup_child_" + i + "' id='child_" + i + "_no_income' value='child_" + i + "_no_income' type='radio' onclick='EAT.aboutChildren.hideIncomeTable(\"child_"+i+"_income_table\")' required> This child does <b>not</b> earn income." +
            "</label>" +
          "</div>" +
          "</div>" +

          "<div id='child_"+i+"_income_table'>"+

            // RESPONSIVE INCOME TABLE
            "<div class='container'>"+

              // SALARY
              "<div class='row'>"+
                  "<div class='col-sm-5'>"+
                    "<span><h6>SALARY</h6> or <h6>WAGE</h6> from a job</span>"+
                  "</div>"+
                  "<div class='col-sm-3'>"+
                    "<input name='option1_child_" + i + "' type='text' class='form-control' id='option1_child_" + i + "' placeholder=''>" +
                  "</div>"+
                  "<div class='col-sm-4'>"+
                    "<select id='frequency_income_category_1_child_" + i + "' name='frequency_income_category_1_child_" + i + "' class='selectpicker' title='select frequency'>" +
                      "<option value='weekly'>weekly</option>" +
                      "<option value='2x month'>2x month</option>" +
                      "<option value='monthly'>monthly</option>" +
                    "</select>" +
                  "</div>"+
              "</div>"+

              // CHILD SOCIAL SECURITY
              "<div class='row'>"+
                "<div class='col-sm-5'>"+
                  "<span><h6>SOCIAL SECURITY</h6> income from child’s own disability or blindness</span>"+
                "</div>"+
                "<div class='col-sm-3'>"+
                  "<input name='option2_child_" + i + "' type='text' class='form-control' id='option2_child_" + i + "' placeholder=''>" +
                "</div>"+
                "<div class='col-sm-4'>"+
                  "<select id='frequency_income_category_2_child_" + i + "' name='frequency_income_category_2_child_" + i + "' class='selectpicker' title='select frequency'>" +
                    "<option value='weekly'>weekly</option>" +
                    "<option value='2x month'>2x month</option>" +
                    "<option value='monthly'>monthly</option>" +
                  "</select>" +
                "</div>"+
              "</div>"+

              // PARENT SOCIAL SECURITY
              "<div class='row'>"+
                  "<div class='col-sm-5'>"+
                    "<span><h6>SOCIAL SECURITY</h6> income because parent is disabled, retired, or deceased</span>"+
                  "</div>"+
                  "<div class='col-sm-3'>"+
                    "<input name='option3_child_" + i + "' type='text' class='form-control' id='option3_child_" + i + "' placeholder=''>" +
                  "</div>"+
                  "<div class='col-sm-4'>"+
                    "<select id='frequency_income_category_3_child_" + i + "' name='frequency_income_category_3_child_" + i + "' class='selectpicker' title='select frequency'>" +
                      "<option value='weekly'>weekly</option>" +
                      "<option value='2x month'>2x month</option>" +
                      "<option value='monthly'>monthly</option>" +
                    "</select>" +
                  "</div>"+
              "</div>"+

              // REGULAR SPENDING
              "<div class='row'>"+
                  "<div class='col-sm-5'>"+
                    "<span><h6>REGULAR</h6> spending money from a person outside the household</span>"+
                  "</div>"+
                  "<div class='col-sm-3'>"+
                    "<input name='option4_child_" + i + "' type='text' class='form-control' id='option4_child_" + i + "' placeholder=''>" +
                  "</div>"+
                  "<div class='col-sm-4'>"+
                    "<select id='frequency_income_category_4_child_" + i + "' name='frequency_income_category_4_child_" + i + "' class='selectpicker' title='select frequency'>" +
                      "<option value='weekly'>weekly</option>" +
                      "<option value='2x month'>2x month</option>" +
                      "<option value='monthly'>monthly</option>" +
                    "</select>" +
                  "</div>"+
              "</div>"+

              // OTHER INCOME
              "<div class='row'>"+
                  "<div class='col-sm-5'>"+
                    "<span><h6>OTHER</h6> income such as from a pension fund, annuity, or trust</span>"+
                  "</div>"+
                  "<div class='col-sm-3'>"+
                    "<input name='option5_child_" + i + "' type='text' class='form-control' id='option5_child_" + i + "' placeholder=''>" +
                  "</div>"+
                  "<div class='col-sm-4'>"+
                    "<select id='frequency_income_category_5_child_" + i + "' name='frequency_income_category_5_child_" + i + "' class='selectpicker' title='select frequency'>" +
                      "<option value='weekly'>weekly</option>" +
                      "<option value='2x month'>2x month</option>" +
                      "<option value='monthly'>monthly</option>" +
                    "</select>" +
                  "</div>"+
              "</div>"+
          "</div>"+
          "</div>" +
        "</div>" +
        "</div>" +
      "</div>";
    }
  },

  generateAdult: function(i) {
    return "<div id='adult_" + i + "' class='adult_info well'><div class='form-group col-md-12' style='margin: 0;'>" +
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

          "<div id='defineIncome_"+i+"' style='color: #333; text-decoration: none;' data-html='true' data-placement='bottom' data-toggle='tooltip' href='#' class='bottom' title=\"<span style='font-weight: bold; color: #aab2bd; '>INCOME INCLUDES:</span><br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> earnings from salary, wages, bonuses, self-employment <br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> military basic pay or allowances for off-base housing<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  public assistance<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  college financial aid<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  worker’s compensation<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span>  unemployment benefits<br/>" +
            "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> strike benefits<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> pensions<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> annuities<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> trusts or estates<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> disability payments<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> Social Security<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> child support<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> interest, dividends, or other investment income<br/>" +
            "<span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> rental income<br/><span style='color:#37bc9b;' class='glyphicon glyphicon-ok' aria-hidden='true'></span> regular cash payments from people outside the household<br/>\"" +

          "<div class='col-sm-12'>" +
            "<label class='radio-inline'>" +
              "<input name='radioGroup_adult_" + i + "' id='adult_" + i + "_has_income' value='adult_" + i + "_has_income' type='radio' onclick='EAT.aboutAdults.showAdultIncome(\"adult_"+i+"_income_table\")' required> This adult earns income." +
            "</label>" +
            "<label class='radio-inline'>" +
              "<input name='radioGroup_adult_" + i + "' id='adult_" + i + "_no_income' value='adult_" + i + "_no_income' type='radio' onclick='EAT.aboutAdults.hideAdultIncome(\"adult_"+i+"_income_table\")' required> This adult does <b>not</b> earn income." +
            "</label>" +
          "</div>" +
          "</div>"+

        "<div id='adult_"+i+"_income_table'>"+

          // RESPONSIVE INCOME TABLE
          "<div class='container'>"+

            // SALARY
            "<div class='row'>"+
                "<div class='col-sm-5'>"+
                  "<span><h6>SALARY</h6> or <h6>WAGE</h6> from a job</span><br/><i>(net income if self-employed)</i>"+
                "</div>"+
                "<div class='col-sm-3'>"+
                  "<input name='option1_adult_" + i + "' type='text' class='form-control' id='option1_adult_" + i + "' placeholder=''>" +
                "</div>"+
                "<div class='col-sm-4'>"+
                  "<select id='frequency_income_category_1_adult_" + i + "' name='frequency_income_category_1_adult_" + i + "' class='selectpicker' title='select frequency'>" +
                    "<option value='weekly'>weekly</option>" +
                    "<option value='2x month'>2x month</option>" +
                    "<option value='monthly'>monthly</option>" +
                  "</select>" +
                "</div>"+
            "</div>"+

            // MILITARY WAGES
            "<div class='row'>"+
              "<div class='col-sm-5'>"+
                "<span><h6>MILITARY</h6> basic pay or allowance</span>"+
              "</div>"+
              "<div class='col-sm-3'>"+
                "<input name='option2_adult_" + i + "' type='text' class='form-control' id='option2_adult_" + i + "' placeholder=''>" +
              "</div>"+
              "<div class='col-sm-4'>"+
                "<select id='frequency_income_category_2_adult_" + i + "' name='frequency_income_category_2_adult_" + i + "' class='selectpicker' title='select frequency'>" +
                   "<option value='weekly'>weekly</option>" +
                   "<option value='2x month'>2x month</option>" +
                   "<option value='monthly'>monthly</option>" +
                 "</select>" +
              "</div>"+
            "</div>"+

            // OTHER INCOME
            "<div class='row'>"+
                "<div class='col-sm-5'>"+
                  "<span><h6>OTHER</h6> income from public assistance, alimony, child support, unemployment benefits, worker's compensation, veteran's benefits</span>"+
                "</div>"+
                "<div class='col-sm-3'>"+
                  "<input name='option3_adult_" + i + "' type='text' class='form-control' id='option3_adult_" + i + "' placeholder=''>" +
                "</div>"+
                "<div class='col-sm-4'>"+
                  "<select id='frequency_income_category_3_adult_" + i + "' name='frequency_income_category_3_adult_" + i + "' class='selectpicker' title='select frequency'>" +
                    "<option value='weekly'>weekly</option>" +
                    "<option value='2x month'>2x month</option>" +
                    "<option value='monthly'>monthly</option>" +
                  "</select>" +
                "</div>"+
            "</div>"+

            // INVESTMENT INCOME
            "<div class='row'>"+
                "<div class='col-sm-5'>"+
                  "<span><h6>INVESTMENTS</h6> or any other income</span>"+
                "</div>"+
                "<div class='col-sm-3'>"+
                  "<input name='option4_adult_" + i + "' type='text' class='form-control' id='option4_adult_" + i + "' placeholder=''>" +
                "</div>"+
                "<div class='col-sm-4'>"+
                  "<select id='frequency_income_category_4_adult_" + i + "' name='frequency_income_category_4_adult_" + i + "' class='selectpicker' title='select frequency'>" +
                    "<option value='weekly'>weekly</option>" +
                    "<option value='2x month'>2x month</option>" +
                    "<option value='monthly'>monthly</option>" +
                  "</select>" +
                "</div>"+
            "</div>"+
        "</div>"+
        "</div>" +
        "</div>" +
      "</div>" +
    "</div>";
  }
};
