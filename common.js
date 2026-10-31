"use strict";
if (!window.jQuery) {
  document.querySelector("#library-error").hidden = false;
} else {
  $(document).ready(function () {
    $.fx.off = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $("#menu-toggle").on("click", function () {
      const expanded = $(this).attr("aria-expanded") === "true";
      $(this).attr("aria-expanded", String(!expanded));
      $("#task-navigation").toggleClass("open", !expanded);
    });
  });
}
