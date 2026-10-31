"use strict";
$(document).ready(function () {
  function showImageState() {
    $("#status").text(
      $("#feature-image").is(":visible")
        ? "The image is visible."
        : "The image is hidden.",
    );
  }
  $("#fade-in").on("click", function () {
    $("#feature-image").stop(true, true).fadeIn(500, showImageState);
  });
  $("#fade-out").on("click", function () {
    $("#feature-image").stop(true, true).fadeOut(500, showImageState);
  });
  $("#fade-toggle").on("click", function () {
    $("#feature-image").stop(true, true).fadeToggle(500, showImageState);
  });
});
