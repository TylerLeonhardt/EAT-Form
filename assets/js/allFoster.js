// Create a global namespace
var EAT = EAT || {};

EAT.allFoster = {
  setupPage: function() {
    $("#desc-heading").prepend(localStorage.getItem("signatureFormsignatureFormfirst") + ", ");
  },

  setStatus: function(status) {
    // Store this value
    localStorage.setItem("allFosterChildren", status);

    // Take the user to the correct page based on their answer
    if(status == "no") {
      // Delete foster records for all children, so they can be explictly & individually set
      var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");
      for(var i = 1; i <= +numChildren; i++) {
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_foster_child_"+i, "false");
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_homeless_child_"+i, "false");
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_migrant_child_"+i, "false");
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_runaway_child_"+i, "false");
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_headstart_child_"+i, "false");
      }

      $(location).attr('href', 'aboutchildren.html');
      return false;
    } else if(status == "yes") {
      // Store that all children are students
      var numChildren = localStorage.getItem("howManyChildrenFormhowManyChildrenFormnumChildren");

      for(var i = 1; i <= +numChildren; i++) {
        localStorage.setItem("aboutChildrenFormaboutChildrenFormis_student_child_"+i, "true");
      }

      $(location).attr('href', 'childrennames.html');
      return false;
    }

    return;
  }
};
