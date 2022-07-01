import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector("ul.gallery");

const addList = galleryItems
  .map(
    ({
      description,
      original,
      preview,
    }) => `<li class="gallery__link"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  )
  .join("");
getGallery.insertAdjacentHTML("afterbegin", addList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["<<", ">>"],
});