import{i as l,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();const u=r=>r.map(t=>`<li class="li-gallery">
      <div class="img-box">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
          title="${t.tags}"/>
      </a>
      </div>
      <div class="description-box">
        <div class="param-boxes"><p class="parameters">likes</p>
        <p class="values">${t.likes}</p></div>
        <div class="param-boxes"><p class="parameters">views</p>
        <p class="values">${t.views}</p></div>
        <div class="param-boxes"><p class="parameters">comments</p>
        <p class="values">${t.comments}</p></div>
        <div class="param-boxes"><p class="parameters">downloads</p>
        <p class="values">${t.downloads}</p></div>
      </div>
      </li>`).join(""),m="https://pixabay.com/",p="46035162-73af77dc9f391d36c3be30780";function f(){document.getElementById("loader").style.display="block"}function n(){document.getElementById("loader").style.display="none"}function g(r){r.preventDefault(),f();const t=r.currentTarget,{searchValue:{value:a}}=t.elements;if(console.log(a),a===""){l.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),n();return}const o={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},s=new URLSearchParams(o);console.log(s.toString()),c.innerHTML="",fetch(`${m}api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){l.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}console.log(e),c.insertAdjacentHTML("beforeend",u(e.hits)),h.refresh()}).catch(e=>console.log(e)).finally(()=>{n()})}const y=document.querySelector("form.js-search-form"),c=document.querySelector(".gallery"),h=new d(".img-box a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});y.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
