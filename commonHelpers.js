import"./assets/vendor-23dd7e6c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const i=document.querySelectorAll(".accordion button");function d(){const r=this.getAttribute("aria-expanded"),o=this.nextElementSibling;for(let t=0;t<i.length;t++)i[t].setAttribute("aria-expanded","false"),i[t].nextElementSibling.hidden=!0;r==="false"&&(this.setAttribute("aria-expanded","true"),o.hidden=!1)}i.forEach(r=>r.addEventListener("click",d));document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("menuIcon"),o=document.getElementById("closeIcon"),t=document.getElementById("menu"),s=document.querySelectorAll(".link-nav");r.addEventListener("click",()=>{t.classList.add("active")}),o.addEventListener("click",()=>{t.classList.remove("active")}),s.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("active")})})});document.getElementById("workTogetherForm").addEventListener("submit",function(r){r.preventDefault();const o=document.getElementById("userEmail").value,t=document.getElementById("userMessage").value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,message:t})}).then(e=>e.json()).then(e=>{e.success?(a(),document.getElementById("workTogetherForm").reset()):alert("There was an error submitting your request. Please try again.")}).catch(e=>{console.error("Error:",e),alert("There was an error submitting your request. Please try again.")})});function a(){document.getElementById("modalBackdrop").classList.add("is-open")}document.getElementById("closeModal").addEventListener("click",function(){document.getElementById("modalBackdrop").classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map