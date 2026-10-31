"use strict";
$(document).ready(function () {
  function updatePreview() {
    $("#preview-name").text($("#profile-name").val() || "Your name");
    $("#preview-email").text($("#profile-email").val() || "Your email");
  }
  $("#profile-name, #profile-email").on("input", function () {
    this.setCustomValidity("");
    updatePreview();
    $("#status").text("Preview updated. Your details stay on this page.");
  });
  $("#profile-form").on("submit", function (event) {
    event.preventDefault();
    const nameInput = $("#profile-name")[0];
    if (!$("#profile-name").val().trim()) {
      nameInput.setCustomValidity("Please enter a name, not only spaces.");
      nameInput.reportValidity();
      return;
    }
    $("#status").text(
      "Your details are valid. This demo does not send or save them.",
    );
  });
  $("#profile-form").on("reset", function () {
    $("#profile-name")[0].setCustomValidity("");
    $("#preview-name").text("Your name");
    $("#preview-email").text("Your email");
    $("#status").text("Form and preview reset.");
  });
});
