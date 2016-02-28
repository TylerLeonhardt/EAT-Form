// Create a global namespace
var EAT = EAT || {};

EAT.confirmChildren = {
  setupPage: function() {
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
  }
};
