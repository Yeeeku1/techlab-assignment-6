"use strict";
$(document).ready(function () {
  $("#hide-message").on("click", function () {
    $("#visibility-message").hide();
    $("#status").text("The message is hidden.");
  });
  $("#show-message").on("click", function () {
    $("#visibility-message").show();
    $("#status").text("The message is visible.");
  });
  $("#toggle-message").on("click", function () {
    $("#visibility-message").toggle();
    $("#status").text(
      $("#visibility-message").is(":visible")
        ? "The message is visible."
        : "The message is hidden.",
    );
  });
});
