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
  alt="${description}" />
</a>
    `;
    })
    .join("");
}

// creating Lightbox
new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionPosition: "bottom",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
