"use strict";
$(document).ready(function () {
  let activeFilter = "All";
  let collectionVisible = true;
  let lastCard = null;
  const dialog = $("#gallery-dialog")[0];
  function updateGallery() {
    let count = 0;
    $(".gallery-card").each(function () {
      const matches =
        activeFilter === "All" ||
        $(this).attr("data-category") === activeFilter;
      if (matches) count += 1;
      if (matches && collectionVisible) $(this).stop(true, true).fadeIn(300);
      else $(this).stop(true, true).fadeOut(300);
    });
    $("#toggle-gallery")
      .text(collectionVisible ? "Hide collection" : "Show collection")
      .attr("aria-expanded", String(collectionVisible));
    $("#status").text(
      collectionVisible
        ? count + " objects · Select an image to take a closer look."
        : "Collection hidden. Choose Show collection to bring it back.",
    );
  }
  $(".filter").on("click", function () {
    activeFilter = $(this).attr("data-filter");
    collectionVisible = true;
    $(".filter").removeClass("active").attr("aria-pressed", "false");
    $(this).addClass("active").attr("aria-pressed", "true");
    updateGallery();
  });
  $("#toggle-gallery").on("click", function () {
    collectionVisible = !collectionVisible;
    updateGallery();
  });
  $(".gallery-card").on("click", function () {
    lastCard = this;
    $("#dialog-title").text($(this).attr("data-title"));
    $("#dialog-description").text($(this).attr("data-description"));
    $("#dialog-image").attr({
      src: $(this).attr("data-src"),
      alt: $(this).attr("data-title"),
    });
    dialog.showModal();
    $("body").addClass("modal-open");
    $("#dialog-image").stop(true, true).hide().fadeIn(250);
    $("#close-dialog").trigger("focus");
  });
  $("#close-dialog").on("click", function () {
    dialog.close();
  });
  $("#gallery-dialog").on("click", function (event) {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  $("#gallery-dialog").on("close", function () {
    $("body").removeClass("modal-open");
    if (lastCard) lastCard.focus();
  });
});
