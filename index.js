import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/",f="46035162-73af77dc9f391d36c3be30780",c=document.querySelector(".search-input"),g=document.querySelector(".btn"),n=document.querySelector(".gallery");function u(){return c.value}function h(a){a.preventDefault();let r=u();if(console.log(r),r===""){l.show({message:"⚠️ Please fill search input",position:"topCenter",color:"yellow"});return}let i={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"};const o=new URLSearchParams(i).toString();console.log(o),n.innerHTML="",fetch(`${d}api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){l.show({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter",color:"yellow"});return}else{console.log(e);const t=e.hits.map(s=>`<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.webformatURL}"
          alt="${s.tags}"
          title="${s.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${s.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${s.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${s.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${s.downloads}</p></div>
      </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",t)}}).catch(e=>console.log(e))}let p=new m(".img-box a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(a){console.log(a)});g.addEventListener("click",h);c.addEventListener("input",u);
//# sourceMappingURL=index.js.map
