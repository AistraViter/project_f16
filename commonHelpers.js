import{S as w,N as S,M as q,K as I,i as A}from"./assets/vendor-b531c9a1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menuIcon"),o=document.getElementById("closeIcon"),n=document.getElementById("menu"),r=document.querySelectorAll(".link-nav");e.addEventListener("click",()=>{n.classList.add("active")}),o.addEventListener("click",()=>{n.classList.remove("active")}),r.forEach(t=>{t.addEventListener("click",()=>{n.classList.remove("active")})})});const p=document.querySelector("#toggle-theme"),l=document.body,f=document.querySelector(".modal-menu"),u=document.querySelectorAll(".link-nav"),M=document.getElementById("closeIcon"),c=M.querySelector("img"),g=document.getElementById("menuIcon"),a=g?g.querySelector("img"):null,L=localStorage.getItem("theme")||"light";l.classList.add(`${L}-theme`);L==="dark"&&(p.checked=!0,f.classList.add("dark-theme-menu"),c&&(c.src="./img/dark-close.png"),a&&(a.src="./img/header-mobile-menu-white.png"),u.forEach(e=>{e.classList.add("link-nav-dark")}));p.addEventListener("change",()=>{p.checked?(l.classList.remove("light-theme"),l.classList.add("dark-theme"),f.classList.add("dark-theme-menu"),a&&(a.src="./img/header-mobile-menu-white.png"),c&&(c.src="./img/dark-close.png"),c.src="./img/dark-close.png",u&&u.forEach(e=>{e.classList.add("link-nav-dark")}),localStorage.setItem("theme","dark")):(l.classList.remove("dark-theme"),l.classList.add("light-theme"),f.classList.remove("dark-theme-menu"),c&&(c.src="./img/white-close.png"),a&&(a.src="./img/header-mobile-menu-dark.png"),u.forEach(e=>{e.classList.remove("link-nav-dark")}),localStorage.setItem("theme","light"))});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".my-project-list"),o=document.querySelector(".load-more-btn"),n=e.querySelectorAll(".my-project-list-item"),r=3;let t=3;function s(){for(let i=0;i<r;i++){if(t>=n.length){o.style.display="none";break}n[t].style.display="block",t++}}o.addEventListener("click",s)});const m=document.querySelectorAll(".accordion button"),E=document.querySelectorAll(".accordion-item");m[0].setAttribute("aria-expanded","true");m[0].nextElementSibling.hidden=!1;E[0].setAttribute("aria-expanded","true");function x(e){e.stopPropagation();const o=this.getAttribute("aria-expanded"),n=this.nextElementSibling,r=this.parentElement;m.forEach(t=>{t.setAttribute("aria-expanded","false"),t.nextElementSibling.hidden=!0,t.parentElement.classList.remove("active"),t.parentElement.setAttribute("aria-expanded","false")}),(o==="false"||!o)&&(this.setAttribute("aria-expanded","true"),n.hidden=!1,r.classList.add("active"),r.setAttribute("aria-expanded","true")),B()}function B(){const e=document.querySelector(".accordion"),n=document.querySelector(".accordion-item.active").querySelector(".accordion-content").scrollHeight;e.style.height=n+"px"}m.forEach(e=>e.addEventListener("click",x));E.forEach(e=>e.addEventListener("click",function(o){this.querySelector("button").click()}));const P=document.querySelector(".empty-text"),j=document.querySelector(".reviews-list"),O=document.querySelector(".reviews-navigation");function T(){return fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET"}).then(o=>(o.ok||(A.error({message:"Sorry, there are no reviews"}),P.classList.remove("is-hidden")),o.json()))}const C=e=>e.reduce((o,n)=>o+`<li class="reviews-item swiper-slide">
    <p class="reviews-text">${n.review}</p>
    <div class="reviewer">
    <img src="${n.avatar_url}" alt="${n.author}" class="reviewer-img">
    <h3 class="reviewer-name">${n.author}</h3>
    </div>
    </li>`,"");T().then(e=>{const o=C(e);j.insertAdjacentHTML("beforeend",o),new w(".mySwiper",{slidesPerView:1,spaceBetween:10,modules:[S,q,I],breakpoints:{768:{slidesPerView:1,spaceBetween:10},1260:{slidesPerView:2,spaceBetween:32}},direction:"horizontal",speed:500,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>{O.classList.add("is-hidden")});const v=document.querySelector(".backdrop"),b=document.querySelector(".close"),$=()=>{b.addEventListener("click",d),v.addEventListener("click",d),document.addEventListener("keydown",k)};function d(){v.classList.remove("is-open"),b.removeEventListener("click",d),v.removeEventListener("click",d),document.removeEventListener("keydown",k)}function k(e){e.key==="Escape"&&d()}axios.defaults.baseURL="https://portfolio-js.b.goit.study/api";function D(e){e.preventDefault();const o=document.querySelector("#user-email").value,n=document.querySelector("#user-message").value;if(!o||!n){alert("Please fill in both the email and message fields.");return}const r={email:o,comment:n};async function t(s){try{const i=await axios.post("/requests",s,{headers:{Accept:"application/json","Content-Type":"application/json"}});i.data.title&&i.data.message?(N(),h.reset()):alert("There was an error submitting your request. Please try again.")}catch(i){console.error("Error:",i),alert("There was an error submitting your request. Please try again.")}}t(r)}function N(){$();const e=document.querySelector(".backdrop");e&&e.classList.add("is-open")}const h=document.querySelector("#work-together-form");h&&h.addEventListener("submit",D);const y=document.querySelector("#closeModal");y&&y.addEventListener("click",closeModal);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("user-email"),o=document.getElementById("email-error"),n=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;e.addEventListener("input",function(){n.test(e.value)?(e.classList.remove("invalid"),e.classList.add("valid"),o.style.display="none"):(e.classList.remove("valid"),e.classList.add("invalid"),o.style.display="block")}),document.getElementById("work-together-form").addEventListener("submit",function(r){n.test(e.value)||(r.preventDefault(),e.classList.add("invalid"),o.style.display="block")})});
//# sourceMappingURL=commonHelpers.js.map
