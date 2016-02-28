// Create a global namespace
var EAT = EAT || {};

EAT.aboutAdults = {
  setupPage: function() {
    // Set page header with applicant's name
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");

    var numAdults = localStorage.getItem("howManyAdultsFormhowManyAdultsFormnumAdults");

    // Delete old localStorage items (in case we decreased the number of children)
    for(var x = +numAdults+1; x <= 15; x++) {
      // Delete name
      localStorage.removeItem("aboutAdultsFormaboutAdultsFormfirst_"+x);
      localStorage.removeItem("aboutAdultsFormaboutAdultsFormlast_"+x);
      localStorage.removeItem("aboutAdultsFormaboutAdultsFormmi_"+x);

      // Delete has income
      localStorage.removeItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+x);
    }
  },

  setupAdult: function(i) {
    if(localStorage.getItem("aboutAdultsFormaboutAdultsFormradioGroup_adult_"+i) == ("adult_"+i+"_has_income")) {
      EAT.aboutAdults.showAdultIncome("adult_"+i+"_income_table");
    } else {
      EAT.aboutAdults.hideAdultIncome("adult_"+i+"_income_table");
    }

    $("#defineIncome_"+i).tooltip({trigger : 'hover'});

    $("#option1_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option2_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option3_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option4_adult_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
  },

  deleteAdultIncome: function(adultId) {
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

  showAdultIncome: function(el) {
    $("#" + el).show("slow");

    // Get adult id
    var vals = el.split("_");
    var x = +vals[1];

    // Make visible inputs required
    $(("#adult_"+x+"_income_table input:text")).attr('required', true);
    $(("#adult_"+x+"_income_table input:radio")).attr('required', true);
    $(("#adult_"+x+"_income_table select")).attr("required", true);
  },

  hideAdultIncome: function(el) {
    $("#" + el).hide("slow");

    // Delete the data stored locally
    var vals = el.split("_");
    var x = +vals[1];
    EAT.aboutAdults.deleteAdultIncome(x);

    // Delete data in this form
    $(("#adult_"+x+"_income_table input:text")).val('');
    $(("#adult_"+x+"_income_table input:radio")).attr('checked', false);

    // Make hidden inputs not required
    $(("#adult_"+x+"_income_table input:text")).removeAttr("required");
    $(("#adult_"+x+"_income_table input:radio")).removeAttr("required");
    $(("#adult_"+x+"_income_table select")).removeAttr("required");
  }
};
