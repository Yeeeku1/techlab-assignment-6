"use strict";
$(document).ready(function () {
  const originalPreview = $("#selector-preview").html();
  $("#select-id").on("click", function () {
    $("#selector-title").text("Your idea is ready to take shape.");
    $("#status").text("Heading updated with the ID selector and .text().");
  });
  $("#select-class").on("click", function () {
    $(".selector-copy").text("Curiosity looks good on you.");
    $("#status").text("Both descriptions updated with the class selector.");
  });
  $("#select-tag").on("click", function () {
    $("#selector-preview")
      .find("p")
      .css({ color: "#1b6452", fontWeight: "700", fontSize: "19px" });
    $("#status").text(
      "Preview paragraphs styled with the p tag selector and .css().",
    );
  });
  $("#insert-html").on("click", function () {
    $("#html-output").html(
      "<strong>Make it happen.</strong> One experiment at a time.",
    );
    $("#status").text("A bold element was added with .html().");
  });
  $("#reset-selectors").on("click", function () {
    $("#selector-preview").html(originalPreview);
    $("#status").text("Original content and styles restored.");
  });
});
