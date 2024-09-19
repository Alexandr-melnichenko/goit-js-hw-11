import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();const u="https://pixabay.com/",m="46035162-73af77dc9f391d36c3be30780",p=r=>r.map(t=>`<li class="li-gallery">
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
      </li>`).join(""),f=document.querySelector("form.js-search-form"),n=document.querySelector(".gallery");f.addEventListener("submit",h);const g=new d(".img-box a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.7,className:"lightbox"});function y(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}function h(r){r.preventDefault(),y();const t=r.currentTarget,{searchValue:{value:a}}=t.elements;if(console.log(a),a===""){l.show({message:"⚠️ Please fill search input",position:"topRight",color:"yellow"}),c();return}const o={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},s=new URLSearchParams(o);console.log(s.toString()),n.innerHTML="",fetch(`${u}api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){l.show({title:"❌",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}console.log(e),n.insertAdjacentHTML("beforeend",p(e.hits)),g.refresh()}).catch(e=>console.log(e)).finally(()=>{c()})}
//# sourceMappingURL=index.js.map
