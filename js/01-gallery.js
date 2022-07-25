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
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", handleCloseByEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", handleCloseByEscape);
      },
    }
  );

  function handleCloseByEscape(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }

  modal.show();
}

list.addEventListener("click", clickedItem);
