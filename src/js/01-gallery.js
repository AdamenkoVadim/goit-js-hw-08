
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const getGallery = document.querySelector('.gallery');
const markapGallery = galleryItems.map(img => {
    return `<div class = "gallery__item">
    <a class = 'gallery__link' href = '${img.original}'>
    <img
    class = 'gallery__image'
    src = "${img.preview}"
    data-source = '${img.original}' 
    alt = '${img.description}'/>
    </a>
    </div>`;
}).join('');

getGallery.insertAdjacentHTML('beforeend',markapGallery);

getGallery.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

instance.show()
}
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });