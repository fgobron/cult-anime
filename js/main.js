(function() {
    const videoElement = document.getElementById('video-player');

    window.togglePlay = function() {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    };
  })();