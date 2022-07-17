import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createItems(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`,
    ""
  );
}
const result = createItems(galleryItems);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", result);

function clickedItem(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function closeModal(e) {
  if (e.keyCode === 27) {
    instance.close();
  }
}

list.addEventListener("click", clickedItem);
list.addEventListener("keydown", closeModal);

// onShow: (instance) => {
//   // Close when hitting escape.
//   document.onkeydown = function (evt) {
//     evt = evt || window.event;
//     var isEscape = false;
//     if ("key" in evt) {
//       isEscape = evt.key === "Escape" || evt.key === "Esc";
//     } else {
//       isEscape = evt.keyCode === 27;
//     }
//     if (isEscape) {
//       instance.close();
//     }
//   };
// };
