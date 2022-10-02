// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');
galleryItems.map(({ preview, original, description }) =>
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`
  )
);

const onClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target);
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} alt=${event.target.description}></img>`
  );
  instance.show();
  const onEscape = key => {
    if (key.code === 'Escape') {
      instance.close();
    }
  };
  window.addEventListener('keydown', onEscape);
};

gallery.addEventListener('click', onClick);
