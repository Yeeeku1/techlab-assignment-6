"use strict";
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#ready-state").text("jQuery is ready!");
  $("#jquery-version").text("v" + $.fn.jquery + " / connected");
  $("#console-preview").text(
    "> jQuery is ready!\n> Yerasyl Dauyl / SE-2527\n> Twelve experiments. Ready to explore.",
  );
  $("#check-ready").on("click", function () {
    console.log("jQuery is ready!");
    $("#status").text(
      "Connection confirmed. jQuery " + $.fn.jquery + " is ready.",
    );
  });
});
