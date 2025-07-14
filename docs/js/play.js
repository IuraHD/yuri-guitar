document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".sound-button");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          const soundId = this.getAttribute("data-sound");
          const audioElement = document.getElementById(soundId);

          if (audioElement) {
              audioElement.currentTime = 0;
              audioElement.play();
          }
      });
  });
});
