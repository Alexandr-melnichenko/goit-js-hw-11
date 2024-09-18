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
 showBox = $('.img-box a').simpleLightbox();
showBox.on('show.simplelightbox', function () {
	// Do something…
});

// export const markup = photos.map((photo) => `
// <li class="li-gallery">
//   <div class="img-box">
// <a class="gallery-link" href=${photo.largeImageURL}>
//     <img
//       class="gallery-image"
//       src=${photo.webformatURL}
//       alt="${photo.tags}"/>
//   </a>
//   </div>
//   <div class="description-box">
//     <div class="param-boxes"><p class="parameters">likes</p>
//     <p class="values">${photo.likes}</p></div>
//     <div class="param-boxes"><p class="parameters">views</p>
//     <p class="values">${photo.views}</p></div>
//     <div class="param-boxes"><p class="parameters">comments</p>
//     <p class="values">${photo.comments}</p></div>
//     <div class="param-boxes"><p class="parameters">downloads</p>
//     <p class="values">${photo.downloads}</p></div>
//   </div>
//   </li>`).join();
  
  
//   <li class="li-gallery">
//     <div class="img-box"></div>
//     <div class="description-box">
//       <div class="param-boxes"><p class="parameters">likes</p>
//       <p class="values">999999</p></div>
      
//       <div class="param-boxes"><p class="parameters">views</p>
//       <p class="values">999999</p></div>
//       <div class="param-boxes"><p class="parameters">comments</p>
//       <p class="values">999999</p></div>
//       <div class="param-boxes"><p class="parameters">downloads</p>
//       <p class="values">999999</p></div>
//     </div>
//   </li>