
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


new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });