// Importez les images
import mangaImage from "../img/art/manga.jpg";
import chibiImage from "../img/art/chibi.jpg";
import irisFoldingImage from "../img/art/iris-folding.jpg";
import gravureSurPolystyreneImage from "../img/art/gravure-sur-polystyrene.jpg";
import pouringImage from "../img/art/pouring.jpg";

document.addEventListener("DOMContentLoaded", function () {
  const images = {
    manga: mangaImage,
    chibi: chibiImage,
    iris: irisFoldingImage,
    gravure: gravureSurPolystyreneImage,
    pouring: pouringImage,
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

