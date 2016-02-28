// Create a global namespace
var EAT = EAT || {};

EAT.yourself = {
  setupPage: function() {
    $("form").sisyphus({timeout: 1, autoRelease: false }); //Autosave form

    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");

    var input = document.getElementById('city');
    var options = {componentRestrictions: {country: 'us'}};
    new google.maps.places.Autocomplete(input, options);
  }
};
