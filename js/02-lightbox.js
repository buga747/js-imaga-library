import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
const imagesMarkup = makeGalleryItemsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", imagesMarkup);

// creating gallery markup
function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" title="${description}" />
</a>
    `;
    })
    .join("");
}

galleryBox.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();

  new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
}
