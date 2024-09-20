import { gallery, showBox } from "../main";
import { createGalleryMarkup } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
export const BASE_URL = "https://pixabay.com/";
export const API_KEY = "46035162-73af77dc9f391d36c3be30780";


// Функції для запуску та закриття лоадера
 function showLoader() {
    document.getElementById('loader').style.display = 'block';
    }
    
 function hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }

// Колбек при натисканні кнопки + запит на сервер
export function onButtonSubmit (event) {
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