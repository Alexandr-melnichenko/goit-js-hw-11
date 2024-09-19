// Імпорт бібліотек
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { API_KEY, BASE_URL } from "./js/pixabay-api";
import { createGalleryMarkup } from "./js/render-functions";

const form = document.querySelector('form.js-search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onButtonSubmit);

const showBox = new SimpleLightbox('.img-box a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
    className: 'lightbox',
   });

// Функції для запуску та закриття лоадера
function showLoader() {
document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

   // Колбек при натисканні кнопки + запит на сервер
function onButtonSubmit (event) {
    event.preventDefault();
    showLoader();

const forma = event.currentTarget;
const {
    searchValue: { value: query },
  } = forma.elements;
console.log(query);

// let searchValue = inputSearchValue();
 
// Перевірка на пустий інпут    
if (query === "") {
    iziToast.show({
        message: `⚠️ Please fill search input`,
        position: 'topRight',
        color: 'yellow',
    })
     hideLoader();
return
}

const options = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
};


// Перетворюю обʼєкт в урл формат запиту
const params = new URLSearchParams(options);
  console.log(params.toString()); // Для проверки правильности параметров

//   зачистка попередньої видачі
gallery.innerHTML = "";  

// Проміс фетч з запитом та методами обробки даних
fetch(`${BASE_URL}api/?${params}`)
.then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((photos) => {
    if(!photos.hits || photos.hits.length === 0) {
        iziToast.show({
            title: "❌",
            message: `"Sorry, there are no images matching your search query. Please try again!"`,
            position: 'topRight',
            color: 'red',
        })
        return
    }
    console.log(photos);
    gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(photos.hits));
    showBox.refresh();
})
      
  .catch((error) => console.log(error))
  .finally(() => {hideLoader()}); 
}

