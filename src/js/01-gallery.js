// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector('.gallery')
function galleryItemsMake(galleryItems) {
    
  return galleryItems.map(({ preview, original, description }) => {
    return`<li class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
           </li>`  
            }).join('');
   }

galleryImg.insertAdjacentHTML('beforeend', galleryItemsMake(galleryItems));

const ligthBox = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 });