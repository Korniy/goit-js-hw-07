
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function creatingGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', creatingGallery(galleryItems));

galleryEl.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    const imgEl = event.target.classList.contains('gallery__image');

    if (!imgEl) {
        return;
    }

    const urlEl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src = "${urlEl}">`);
    instance.show(() => window.addEventListener('keydown', onEscPress));
    
    function onEscPress(event) {
    
    if (event.key === 'Escape') {
        instance.close(() => window.removeEventListener('keydown', onEscPress));
        return;
    }
    return;
};

};

















































































