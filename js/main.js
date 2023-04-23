(function() {
    const videoElement = document.getElementById('video-player');
    const buttonPlay = document.getElementById('play-button');

    window.togglePlay = function() {
      if (videoElement.paused) {
        videoElement.play();
        buttonPlay.style.display = 'none';
      } else {
        videoElement.pause();
        buttonPlay.style.display = 'block';
      }
    };
  })();