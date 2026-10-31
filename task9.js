"use strict";
$(document).ready(function () {
  function resetAnimation() {
    $("#motion-box")
      .stop(true, false)
      .css({ left: 0, top: 0, width: 72, height: 72, opacity: 1 });
    $("#animate-sequence").prop("disabled", false);
    $("#status").text("Sequence reset. Ready to play.");
  }
  $("#animate-sequence").on("click", function () {
    resetAnimation();
    $(this).prop("disabled", true);
    const right = Math.max(0, $("#stage").width() - 72);
    const down = $("#stage").height() - 72;
    $("#status").text("Step 1 of 4: move right.");
    $("#motion-box")
      .animate({ left: right }, 550, function () {
        $("#status").text("Step 2 of 4: move down.");
      })
      .animate({ top: down }, 550, function () {
        $("#status").text("Step 3 of 4: shrink.");
      })
      .animate({ width: 40, height: 40 }, 550, function () {
        $("#status").text("Step 4 of 4: return to the start.");
      })
      .animate({ left: 0, top: 0, width: 72, height: 72 }, 700, function () {
        $("#animate-sequence").prop("disabled", false);
        $("#status").text(
          "All four steps complete. Back to the original square.",
        );
      });
  });
  $("#reset-animation").on("click", resetAnimation);
  $(window).on("resize", resetAnimation);
});
