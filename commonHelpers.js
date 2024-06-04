import{S as b,N as k,M as w,K as S,i as q}from"./assets/vendor-b531c9a1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menuIcon"),t=document.getElementById("closeIcon"),n=document.getElementById("menu"),i=document.querySelectorAll(".link-nav");e.addEventListener("click",()=>{n.classList.add("active")}),t.addEventListener("click",()=>{n.classList.remove("active")}),i.forEach(o=>{o.addEventListener("click",()=>{n.classList.remove("active")})})});const d=document.querySelector("#toggle-theme"),a=document.body,u=document.querySelector(".modal-menu"),m=document.querySelectorAll(".link-nav"),I=document.getElementById("closeIcon"),p=I.querySelector("img"),M=document.getElementById("menuIcon"),g=M.querySelector("img"),h=localStorage.getItem("theme")||"light";a.classList.add(`${h}-theme`);h==="dark"&&(d.checked=!0,u.classList.add("dark-theme-menu"),p.src="./img/dark-close.png",g.src="./img/header-mobile-menu-white.png",m.forEach(e=>{e.classList.add("link-nav-dark")}));d.addEventListener("change",()=>{d.checked?(a.classList.remove("light-theme"),a.classList.add("dark-theme"),u.classList.add("dark-theme-menu"),p.src="./img/dark-close.png",m.forEach(e=>{e.classList.add("link-nav-dark")}),localStorage.setItem("theme","dark")):(a.classList.remove("dark-theme"),a.classList.add("light-theme"),u.classList.remove("dark-theme-menu"),p.src="./img/white-close.png",g.src="./img/header-mobile-menu-dark.png",m.forEach(e=>{e.classList.remove("link-nav-dark")}),localStorage.setItem("theme","light"))});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".my-project-list"),t=document.querySelector(".load-more-btn"),n=e.querySelectorAll(".my-project-list-item"),i=3;let o=3;function s(){for(let r=0;r<i;r++){if(o>=n.length){t.style.display="none";break}n[o].style.display="block",o++}}t.addEventListener("click",s)});const c=document.querySelectorAll(".accordion button");c[0].setAttribute("aria-expanded","true");c[0].nextElementSibling.hidden=!1;function B(){const e=this.getAttribute("aria-expanded"),t=this.nextElementSibling;for(let n=0;n<c.length;n++)c[n].setAttribute("aria-expanded","false"),c[n].nextElementSibling.hidden=!0;e==="false"&&(this.setAttribute("aria-expanded","true"),t.hidden=!1)}c.forEach(e=>e.addEventListener("click",B));const x=document.querySelector(".empty-text"),A=document.querySelector(".reviews-list"),P=document.querySelector(".reviews-navigation");function j(){return fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET"}).then(t=>(t.ok||(q.error({message:"Sorry, there are no reviews"}),x.classList.remove("is-hidden")),t.json()))}const O=e=>e.reduce((t,n)=>t+`<li class="reviews-item swiper-slide">
    <p class="reviews-text">${n.review}</p>
    <div class="reviewer">
    <img src="${n.avatar_url}" alt="${n.author}" class="reviewer-img">
    <h3 class="reviewer-name">${n.author}</h3>
    </div>
    </li>`,"");j().then(e=>{const t=O(e);A.insertAdjacentHTML("beforeend",t),new b(".mySwiper",{slidesPerView:1,spaceBetween:10,modules:[k,w,S],breakpoints:{768:{slidesPerView:1,spaceBetween:10},1260:{slidesPerView:2,spaceBetween:32}},direction:"horizontal",speed:500,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>{P.classList.add("is-hidden")});const v=document.querySelector(".backdrop"),L=document.querySelector(".close"),T=()=>{L.addEventListener("click",l),v.addEventListener("click",l),document.addEventListener("keydown",E)};function l(){v.classList.remove("is-open"),L.removeEventListener("click",l),v.removeEventListener("click",l),document.removeEventListener("keydown",E)}function E(e){e.key==="Escape"&&l()}axios.defaults.baseURL="https://portfolio-js.b.goit.study/api";function C(e){e.preventDefault();const t=document.querySelector("#user-email").value,n=document.querySelector("#user-message").value;if(!t||!n){alert("Please fill in both the email and message fields.");return}const i={email:t,comment:n};async function o(s){try{const r=await axios.post("/requests",s,{headers:{Accept:"application/json","Content-Type":"application/json"}});r.data.title&&r.data.message?($(),f.reset()):alert("There was an error submitting your request. Please try again.")}catch(r){console.error("Error:",r),alert("There was an error submitting your request. Please try again.")}}o(i)}function $(){T();const e=document.querySelector(".backdrop");e&&e.classList.add("is-open")}const f=document.querySelector("#work-together-form");f&&f.addEventListener("submit",C);const y=document.querySelector("#closeModal");y&&y.addEventListener("click",closeModal);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("user-email"),t=document.getElementById("email-error"),n=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;e.addEventListener("input",function(){n.test(e.value)?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block")}),document.getElementById("work-together-form").addEventListener("submit",function(i){n.test(e.value)||(i.preventDefault(),e.classList.add("invalid"),t.style.display="block")})});
//# sourceMappingURL=commonHelpers.js.map
