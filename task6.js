"use strict";
$(document).ready(function () {
  let alternateImage = false;
  let galleryLink = false;
  $("#change-image").on("click", function () {
    alternateImage = !alternateImage;
    $("#attribute-image").attr({
      src: alternateImage ? "assets/camera.svg" : "assets/orbit.svg",
      alt: alternateImage ? "Pocket camera" : "Orbit headphones",
    });
    $("#status").text(
      "Image src changed to " + $("#attribute-image").attr("src") + ".",
    );
  });
  $("#change-link").on("click", function () {
    galleryLink = !galleryLink;
    $("#destination-link")
      .attr("href", galleryLink ? "task11.html" : "task3.html")
      .text(
        galleryLink
          ? "Explore the image gallery ↗"
          : "Explore fade effects ↗",
      );
    $("#status").text(
      "Link href changed to " + $("#destination-link").attr("href") + ".",
    );
  });
});
