// Create a global namespace
var EAT = EAT || {};

EAT.done = {
  sendData: function() {
    // Package all data
    var LS = localStorage;

    $.ajax({
        url: "http://fun-projects.cloudapp.net:8080/api",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        contentType: "application/json",
        data: JSON.stringify(LS)
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
    .always(function() {
        /* ... */
    });

    // Clear the localStorage
    localStorage.clear();
  },

  drawCheckmark: function() {
    // Draw checkmark
    var start = 100;
    var mid = 145;
    var end = 250;
    var width = 22;
    var leftX = start;
    var leftY = start;
    var rightX = mid - (width / 2.7);
    var rightY = mid + (width / 2.7);
    var animationSpeed = 15;

    var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
    ctx.lineWidth = width;
    ctx.strokeStyle = '#67B345';

    for (i = start; i < mid; i++) {
        var drawLeft = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(start, start);
            ctx.lineTo(leftX, leftY);
            ctx.stroke();
            leftX++;
            leftY++;
        }, 1 + (i * animationSpeed) / 3);
    }

    for (i = mid; i < end; i++) {
        var drawRight = window.setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(leftX, leftY);
            ctx.lineTo(rightX, rightY);
            ctx.stroke();
            rightX++;
            rightY--;
        }, 1 + (i * animationSpeed) / 3);
    }
  }
};
