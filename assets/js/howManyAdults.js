// Create a global namespace
var EAT = EAT || {};

EAT.howManyAdults = {
  setupPage: function() {
    $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

    $("input[name='numAdults']").TouchSpin({ min: 1, max: 15, initval: 1 });
    $("#defineAdult").tooltip();
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
  }
};
