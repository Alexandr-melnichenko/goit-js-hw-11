// Імпорт бібліотек
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { API_KEY, BASE_URL } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions.js';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');

const showBox = new SimpleLightbox('.img-box a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
  className: 'lightbox',
});

form.addEventListener('submit', onSubmit);

// Колбек при натисканні кнопки + запит на сервер
function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const {
    searchValue: { value: query },
  } = form.elements;

  // Оновлюю значення інпуту на момент натискання кнопки
  // let searchValue = inputSearchValue();

  // Перевірка на пустий інпут
  if (query === '') {
    iziToast.show({
      message: `⚠️ Please fill search input`,
      position: 'topCenter',
      color: 'yellow',
    });
    return;
  }

  // Створюю обʼєкт з опціями запиту
  const options = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  // Перетворюю обʼєкт в урл формат запиту
  const params = new URLSearchParams(options);
  console.log(params.toString()); // Для проверки правильности параметров

  //   зачистка попередньої видачі
  gallery.innerHTML = '';

  // Проміс фетч з запитом та методами обробки даних
  fetch(`${BASE_URL}api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(photos => {
      if (!photos.hits || photos.hits.length === 0) {
        iziToast.show({
          message: `"Sorry, there are no images matching your search query. Please try again!"`,
          position: 'topCenter',
          color: 'yellow',
        });
        return;
      }
      // console.log(photos);

      gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(photos.hits));
      showBox.refresh();
      // Дані від бекенда
    })
    .catch(error => console.log(error));
}
