// Create a global namespace
var EAT = EAT || {};

EAT.confirmAdults = {
  setupPage: function() {
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
  }
};
