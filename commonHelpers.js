import{S as h,N as y,M as g,K as v,i as L}from"./assets/vendor-b531c9a1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("menuIcon"),o=document.getElementById("closeIcon"),t=document.getElementById("menu"),i=document.querySelectorAll(".link-nav");r.addEventListener("click",()=>{t.classList.add("active")}),o.addEventListener("click",()=>{t.classList.remove("active")}),i.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("active")})})});const l=document.querySelector("#toggle-theme"),c=document.body,m=localStorage.getItem("theme")||"light";c.classList.add(`${m}-theme`);m==="dark"&&(l.checked=!0);l.addEventListener("change",()=>{l.checked?(c.classList.remove("light-theme"),c.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(c.classList.remove("dark-theme"),c.classList.add("light-theme"),localStorage.setItem("theme","light"))});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".my-project-list"),o=document.querySelector(".load-more-btn"),t=r.querySelectorAll(".my-project-list-item"),i=3;let e=3;function s(){for(let n=0;n<i;n++){if(e>=t.length){o.style.display="none";break}t[e].style.display="block",e++}}o.addEventListener("click",s)});const a=document.querySelectorAll(".accordion button");function b(){const r=this.getAttribute("aria-expanded"),o=this.nextElementSibling;for(let t=0;t<a.length;t++)a[t].setAttribute("aria-expanded","false"),a[t].nextElementSibling.hidden=!0;r==="false"&&(this.setAttribute("aria-expanded","true"),o.hidden=!1)}a.forEach(r=>r.addEventListener("click",b));const w=document.querySelector(".empty-text"),S=document.querySelector(".reviews-list"),E=document.querySelector(".reviews-navigation");function k(){return fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET"}).then(o=>(o.ok||(L.error({message:"Sorry, there are no reviews"}),w.classList.remove("is-hidden")),o.json()))}const q=r=>r.reduce((o,t)=>o+`<li class="reviews-item swiper-slide">
    <p class="reviews-text">${t.review}</p>
    <div class="reviewer">
    <img src="${t.avatar_url}" alt="${t.author}" class="reviewer-img">
    <h3 class="reviewer-name">${t.author}</h3>
    </div>
    </li>`,"");k().then(r=>{const o=q(r);S.insertAdjacentHTML("beforeend",o),new h(".mySwiper",{slidesPerView:1,spaceBetween:10,modules:[y,g,v],breakpoints:{768:{slidesPerView:1,spaceBetween:0},1260:{slidesPerView:2,spaceBetween:32}},direction:"horizontal",speed:500,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(r=>{E.classList.add("is-hidden")});axios.defaults.baseURL="https://portfolio-js.b.goit.study/api";function M(r){r.preventDefault();const o=document.querySelector("#user-email").value,t=document.querySelector("#user-message").value;if(!o||!t){alert("Please fill in both the email and message fields.");return}const i={email:o,comment:t};async function e(s){try{const n=await axios.post("/requests",s,{headers:{Accept:"application/json","Content-Type":"application/json"}});n.data.title&&n.data.message?(x(),d.reset()):alert("There was an error submitting your request. Please try again.")}catch(n){console.error("Error:",n),alert("There was an error submitting your request. Please try again.")}}e(i)}function x(){const r=document.querySelector(".backdrop");r&&r.classList.add("is-open")}const d=document.querySelector("#work-together-form");d&&d.addEventListener("submit",M);const u=document.querySelector("#closeModal");u&&u.addEventListener("click",closeModal);document.querySelector(".modal");const p=document.querySelector(".backdrop"),I=document.querySelector(".close");function f(){p.classList.remove("is-open")}I.addEventListener("click",f);p.addEventListener("click",f);
//# sourceMappingURL=commonHelpers.js.map
