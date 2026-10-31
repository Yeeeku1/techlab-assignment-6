"use strict";
$(document).ready(function () {
  function resetAnimation() {
    $("#motion-box")
      .stop(true, false)
      .css({ left: 0, top: 0, width: 72, height: 72, opacity: 1 });
    $("#animate-combined").prop("disabled", false);
    $("#status").text("All properties restored.");
  }
  $("#animate-combined").on("click", function () {
    resetAnimation();
    $(this).prop("disabled", true);
    const right = Math.max(0, $("#stage").width() - 120);
    $("#status").text("Moving, growing, and fading together…");
    $("#motion-box").animate(
      { left: right, top: 96, width: 120, height: 120, opacity: 0.45 },
      1000,
      function () {
        $("#animate-combined").prop("disabled", false);
        $("#status").text(
          "Complete. Position, size, and opacity changed together.",
        );
      },
    );
  });
  $("#reset-animation").on("click", resetAnimation);
  $(window).on("resize", resetAnimation);
});
