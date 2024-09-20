// Імпорт бібліотек
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {  onButtonSubmit } from "./js/pixabay-api";
// import { createGalleryMarkup } from "./js/render-functions";

const form = document.querySelector('form.js-search-form');
export const gallery = document.querySelector('.gallery');

export const showBox = new SimpleLightbox('.img-box a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
    className: 'lightbox',
   });


form.addEventListener('submit', onButtonSubmit);

