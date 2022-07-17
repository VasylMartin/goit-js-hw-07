import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGallery(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
    ""
  );
}
const result = createGallery(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", result);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
