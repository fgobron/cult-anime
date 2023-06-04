// Art
import mangaImage from "../img/art/manga.jpg";
import chibiImage from "../img/art/chibi.jpg";
import irisFoldingImage from "../img/art/iris-folding.jpg";
import gravureSurPolystyreneImage from "../img/art/gravure-sur-polystyrene.jpg";
import pouringImage from "../img/art/pouring.jpg";
import acryliqueImage from "../img/art/atelier-acrylique.jpg";

// Multimedia
import clipImage from "../img/multimedia/clip-video.jpg";
import interviewImage from "../img/multimedia/interview.jpg";
import stopmotionImage from "../img/multimedia/stop-motion.jpg";
import tutorielImage from "../img/multimedia/tutoriel.jpg";

document.addEventListener("DOMContentLoaded", function () {
  const images = {
    manga: mangaImage,
    chibi: chibiImage,
    iris: irisFoldingImage,
    gravure: gravureSurPolystyreneImage,
    pouring: pouringImage,
    acrylique: acryliqueImage,
    clipvideo: clipImage,
    interview: interviewImage,
    stopmotion: stopmotionImage,
    tutoriel: tutorielImage,
  };

  function calculateStripPosition(index) {
    const width = window.innerWidth;
    let stripWidth;

    if (width <= 400) {
      stripWidth = 240;
    } else if (width <= 600) {
      stripWidth = 320;
    } else if (width <= 820) {
      stripWidth = 400;
    } else {
      stripWidth = 480;
    }

    return (stripWidth / 10) * index;
  }

  document.querySelectorAll(".img-wrapper").forEach((container) => {
    const imageName = container.dataset.image;
    const imageUrl = images[imageName];

    container.querySelectorAll(".image-strip").forEach((strip, index) => {
      const stripPosition = calculateStripPosition(index);
      strip.style.backgroundImage = `url('${imageUrl}')`;
      strip.style.backgroundPosition = `-${stripPosition}px 0`;
    });
  });

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var optimizedScrollHandler = debounce(function () {
    var imgWrappers = document.querySelectorAll(".img-wrapper");
    var lastImgWrapper = imgWrappers[imgWrappers.length - 1];

    imgWrappers.forEach((container) => {
      var rect = container.getBoundingClientRect();

      // Check if the image is within 200px from the top
      if (rect.top <= 200 && rect.top >= 0) {
        container.querySelectorAll(".image-strip").forEach((strip) => {
          strip.style.marginLeft = "0";
        });
      } else {
        container.querySelectorAll(".image-strip").forEach((strip) => {
          strip.style.marginLeft = "";
        });
      }
    });

    // Check the last image position and if the user has scrolled to the bottom
    checkForEffectTrigger(lastImgWrapper);
  }, 100);

  function checkForEffectTrigger(lastImgWrapper) {
    var rect = lastImgWrapper.getBoundingClientRect();

    // Apply effect to the last image if it's within 200px from the top
    if (rect.top <= 200 && rect.top >= 0) {
      applyEffect(lastImgWrapper);
      return;
    }

    // Apply effect to the last image if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      applyEffect(lastImgWrapper);
      return;
    }

    // Remove effect otherwise
    removeEffect(lastImgWrapper);
  }

  function applyEffect(imgWrapper) {
    imgWrapper.querySelectorAll(".image-strip").forEach((strip) => {
      strip.style.marginLeft = "0";
    });
  }

  function removeEffect(imgWrapper) {
    imgWrapper.querySelectorAll(".image-strip").forEach((strip) => {
      strip.style.marginLeft = "";
    });
  }

  // This condition will check if the viewport is less or equal to 768px
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.addEventListener("scroll", optimizedScrollHandler);
  }
});
