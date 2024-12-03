// Get the main video element
const mainVideo = document.getElementById("main-video");

// Get all circular icons
const icons = document.querySelectorAll(".circle-icon");

// Add click event listeners to each icon
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    // Get the video source from the data-video attribute
    const videoSrc = icon.getAttribute("data-video");

    // Update the main video source
    const sourceElement = mainVideo.querySelector("source");
    sourceElement.setAttribute("src", videoSrc);

    // Load and play the new video
    mainVideo.load();
    mainVideo.play();
  });
});