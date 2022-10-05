// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from '/node_modules/simplelightbox/src/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    'beforeend',
    `
      <a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>`
  );
}
// var lightbox = new SimpleLightbox('.gallery a'); --> zamiast ostatniej linijiki można dodać tą

const lightbox = () => {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    canimationSpeed: 125,
    captionPosition: 'outside',
    fadeSpeed: 650,
  });
};

gallery.addEventListener('click', lightbox());
