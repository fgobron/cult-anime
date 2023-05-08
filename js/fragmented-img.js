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

  document.querySelectorAll(".img-wrapper").forEach((container) => {
    const imageName = container.dataset.image;
    const imageUrl = images[imageName];
    container.querySelectorAll(".image-strip").forEach((strip, index) => {
      const stripPosition = (480 / 10) * index;
      strip.style.backgroundImage = `url('${imageUrl}')`;
      strip.style.backgroundPosition = `-${stripPosition}px 0`;
    });
  });
});

