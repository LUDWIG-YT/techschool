// MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", ()=>{
nav.classList.toggle("active");
});

// ANIMACIONES SCROLL
const elements = document.querySelectorAll(".fade, .reveal");

function showElements(){
let trigger = window.innerHeight - 100;

elements.forEach(el=>{
let top = el.getBoundingClientRect().top;

if(top < trigger){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", showElements);

// ANIMACIÓN INICIAL
window.addEventListener("load", ()=>{
showElements();
});
