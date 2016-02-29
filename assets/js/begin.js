// Create a global namespace
var EAT = EAT || {};

EAT.begin = {
  setupPage: function() {
    // Ensures that the user has JS enabled; needed for the form to work properly
    $('#beginButton').removeAttr('disabled');

    $("#beginButton").click( function() {
      $(location).attr('href', '/signature');
    });
  }
};
