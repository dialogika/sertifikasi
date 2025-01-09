document.addEventListener("DOMContentLoaded", function () {
  Atropos({
    el: ".hero-atropos",
    shadowScale: 1, // Disable scaling
    activeOffset: 50, // Increase active offset for a more pronounced effect
    shadow: false, // Enable shadow for depth
    highlight: true, // Add a soft highlight for extra flair
    rotateXMax: 25, // Allow more rotation along X-axis
    rotateYMax: 25, // Allow more rotation along Y-axis
    rotateTouch: true, // Ensure functionality for touch devices
    duration: 300, // Smooth transition timing
  });
});
