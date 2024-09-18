// Імпорт бібліотек
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { API_KEY, BASE_URL } from "./js/pixabay-api";
// import { showBox } from "./js/render-functions";
// import { markup } from "./js/render-functions";

const searchInput = document.querySelector('.search-input');
const btnSubmit = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');

// Приймаємо значення з інпуту
function inputSearchValue () {
   let searchValue = searchInput.value;
    return searchValue;
    }


// Колбек при натисканні кнопки + запит на сервер
function onButtonSubmit (event) {
    event.preventDefault();

    // Оновлюю значення інпуту на момент натискання кнопки
let searchValue = inputSearchValue(); 
console.log (searchValue);

   // Перевірка на пустий інпут    
if (searchValue === "") {
    iziToast.show({
        message: `⚠️ Please fill search input`,
        position: 'topCenter',
        color: 'yellow',
    })
return
}

// Створюю обʼєкт з опціями запиту
let options = {
    key: API_KEY,
    q: searchValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
};

// Перетворюю обʼєкт в урл формат запиту
const params = new URLSearchParams(options).toString();
  console.log(params); // Для проверки правильности параметров

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
            message: `"Sorry, there are no images matching your search query. Please try again!"`,
            position: 'topCenter',
            color: 'yellow',
        })
        return
    }
else {
    console.log(photos);

    const markup = photos.hits.map((photo) => {
        return `<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${photo.largeImageURL}">
        <img
          class="gallery-image"
          src="${photo.webformatURL}"
          alt="${photo.tags}"
          title="${photo.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${photo.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${photo.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${photo.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${photo.downloads}</p></div>
      </div>
      </li>`}).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    // Дані від бекенда
          
      }})
  .catch((error) => console.log(error));  
}



export let showBox = new SimpleLightbox('.img-box a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
    className: 'lightbox',
   });
showBox.on('show.simplelightbox', function () {
	// Do something…
});

showBox.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});

// with jQuery nearly the same
//  showBox = $('.img-box a').simpleLightbox();
// showBox.on('show.simplelightbox', function () {
// 	// Do something…
// });




// new SimpleLightbox('.img-box a', { 
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
//     overlayOpacity: 0.7,
//     className: 'lightbox',
//    });




btnSubmit.addEventListener('click', onButtonSubmit);
searchInput.addEventListener('input', inputSearchValue);
