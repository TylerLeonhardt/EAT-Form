// Create a global namespace
var EAT = EAT || {};

EAT.howManyChildren = {
  setupPage: function() {
    $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
    $("input[name='numChildren']").TouchSpin({ min: 1, max: 15, initval: 1 });
  },

  nextPage: function(onSNAP) {
    // Take the user to the correct page based on their answer
    if(onSNAP == "no") {
      $(location).attr('href', '/allfoster');
      return false;
    } else if(onSNAP == "yes") {
      $(location).attr('href', '/childrennames');
      return false;
    }
  }
};
