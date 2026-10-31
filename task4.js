"use strict";
$(document).ready(function () {
  function showPanelState() {
    const open = $("#details-panel").is(":visible");
    $("#slide-toggle").attr("aria-expanded", String(open));
    $("#status").text(open ? "The panel is open." : "The panel is closed.");
  }
  $("#slide-up").on("click", function () {
    $("#details-panel").stop(true, true).slideUp(400, showPanelState);
  });
  $("#slide-down").on("click", function () {
    $("#details-panel").stop(true, true).slideDown(400, showPanelState);
  });
  $("#slide-toggle").on("click", function () {
    $("#details-panel").stop(true, true).slideToggle(400, showPanelState);
  });
});
