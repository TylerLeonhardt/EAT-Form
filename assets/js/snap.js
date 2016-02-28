// Create a global namespace
var EAT = EAT || {};

EAT.snap = {
  setupPage: function() {
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
    $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form
    EAT.snap.hideCaseNumber();

    // Force user to click Yes or No every time they visit this page
    $("#hasSNAP_yes").prop('checked', false);
    $("#hasSNAP_no").prop('checked', false);
    localStorage.removeItem("hasSnapFormhasSnapFormhasSNAP");
  },

  showCaseNumber: function() {
    $("#withCaseNumber").show();
    $("#caseNumber").attr("required", true);
  },

  hideCaseNumber: function() {
    $("#withCaseNumber").hide();
    $("#caseNumber").removeAttr("required");
  },

  setStatus: function(status) {
    // Give control back to page since this field is required
    if(status == undefined) {
      return false;
    }

    // Store this value
    localStorage.setItem("hasSnapFormhasSnapFormhasSNAP", status.value);

    $(location).attr('href', 'howmanychildren.html');
    return false;
  }
};
