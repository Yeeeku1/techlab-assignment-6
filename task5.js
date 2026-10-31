"use strict";
$(document).ready(function () {
  let nextItem = 1;
  function updateCount() {
    const count = $("#item-list li").length;
    $("#item-count").text(count + (count === 1 ? " item" : " items"));
    $("#empty-list").prop("hidden", count > 0);
  }
  $("#append-item").on("click", function () {
    $("#item-list").append($("<li>").text("New idea " + nextItem));
    nextItem += 1;
    updateCount();
    $("#status").text("An idea was added to the end.");
  });
  $("#prepend-item").on("click", function () {
    $("#item-list").prepend($("<li>").text("Priority idea " + nextItem));
    nextItem += 1;
    updateCount();
    $("#status").text("An idea was added to the beginning.");
  });
  $("#remove-item").on("click", function () {
    if ($("#item-list li").length === 0) {
      $("#status").text("The queue is empty. Add an idea first.");
      return;
    }
    $("#item-list li").last().remove();
    updateCount();
    $("#status").text("The last idea was removed.");
  });
});
