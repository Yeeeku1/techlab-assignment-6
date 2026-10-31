"use strict";
$(document).ready(function () {
  function resetAnimation() {
    $("#motion-box")
      .stop(true, false)
      .css({ left: 0, top: 0, width: 72, height: 72, opacity: 1 });
    $("#animate-basic").prop("disabled", false);
    $("#status").text("Square restored to its starting position.");
  }
  $("#animate-basic").on("click", function () {
    resetAnimation();
    $(this).prop("disabled", true);
    const right = Math.max(0, $("#stage").width() - 120);
    $("#status").text("Moving right and growing…");
    $("#motion-box").animate(
      { left: right, width: 120, height: 120 },
      900,
      function () {
        $("#animate-basic").prop("disabled", false);
        $("#status").text("Complete. The square is now 120 × 120 pixels.");
      },
    );
  });
  $("#reset-animation").on("click", resetAnimation);
  $(window).on("resize", resetAnimation);
});
