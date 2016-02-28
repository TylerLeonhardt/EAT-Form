// Create a global namespace
var EAT = EAT || {};

EAT.aboutChildren = {
  setupPage: function() {
    // Set page header with applicant's name
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
    console.log("here");
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
      EAT.aboutChildren.deleteChildIncome(x);
    }

  },

  setupChild: function(i) {
    // Set display based on previously stored values for this child (if navigating back to this page)
    if(localStorage.getItem("aboutChildrenFormaboutChildrenFormradioGroup_child_"+i) == ("child_"+i+"_has_income")) {
      EAT.aboutChildren.showIncomeTable("child_"+i+"_income_table");
    } else {
      EAT.aboutChildren.hideIncomeTable("child_"+i+"_income_table");
    }

    $("#option1_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option2_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option3_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option4_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});
    $("#option5_child_"+i).autoNumeric('init',{aSep: ',', aDec: '.', aSign: '$ '});

    $("#defineIncome_"+i).tooltip({trigger : 'hover'});
  },

  deleteChildIncome: function(childId) {
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

  hideIncomeTable: function(el) {
      $("#" + el).hide("slow");

      // Delete the data stored locally
      var vals = el.split("_");
      var x = +vals[1];
      EAT.aboutChildren.deleteChildIncome(x);

      // Delete data in this form
      $(("#child_"+x+"_income_table input:text")).val('');
      $(("#child_"+x+"_income_table input:radio")).attr('checked',false);

      // Make hidden inputs not required
      $(("#child_"+x+"_income_table input:text")).removeAttr("required");
      $(("#child_"+x+"_income_table input:radio")).removeAttr("required");
      $(("#child_"+x+"_income_table select")).removeAttr("required");
  },

  showIncomeTable: function(el) {
      $("#" + el).show("slow");

      // Get child id
      var vals = el.split("_");
      var x = +vals[1];

      // Make inputs required
      $(("#child_"+x+"_income_table input:text")).attr("required", true);
      $(("#child_"+x+"_income_table input:radio")).attr("required", true);
      $(("#child_"+x+"_income_table select")).attr("required", true);
  }
};
