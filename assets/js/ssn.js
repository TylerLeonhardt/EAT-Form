// Create a global namespace
var EAT = EAT || {};

EAT.ssn = {
  showSSN: function() {
    $("#ssnDiv").show();
    $("#ssn").attr("required", true);
  },

  hideSSN: function() {
    $("#ssnDiv").hide();
    $("#ssn").removeAttr("required");
  },

  setupPage: function() {
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
    $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

    EAT.ssn.hideSSN();

    // Force user to click Yes or No every time they visit this page
    $("#hasSSN_yes").prop('checked', false);
    $("#hasSSN_no").prop('checked', false);
    localStorage.removeItem("ssnFormssnFormhasSSN");
  },

  setStatus: function(status) {
    if(status == undefined) {
      console.log("sos");
      return false;
    }

    // Store this value
    localStorage.setItem("ssnFormssnFormhasSSN", status.value);

    // Take the user to next page
    $(location).attr('href', 'confirmchildren.html');
    return false;
  }
};
