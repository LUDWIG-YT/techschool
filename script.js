// LOADER
window.addEventListener("load", ()=>{
const loader = document.getElementById("loader");
if(loader) loader.style.display = "none";
});

// CURSOR
const cursor = document.querySelector(".cursor");
if(cursor){
document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";
});
}

// MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn && nav){
menuBtn.addEventListener("click", ()=>{
nav.classList.toggle("active");
});
}

// DARK MODE
const modoBtn = document.getElementById("modoBtn");

if(modoBtn){
modoBtn.addEventListener("click", ()=>{
document.body.classList.toggle("light");
});
}

// FORM
const form = document.getElementById("form");
const toast = document.getElementById("toast");

if(form && toast){
form.addEventListener("submit", e=>{
e.preventDefault();
toast.style.display="block";
setTimeout(()=>toast.style.display="none",2000);
});
}

// PARTICLES
const canvas=document.getElementById("particles");

if(canvas){
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let p=[];
for(let i=0;i<50;i++){
p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
p.forEach(dot=>{
ctx.fillRect(dot.x,dot.y,2,2);
dot.y+=0.3;
if(dot.y>canvas.height)dot.y=0;
});
requestAnimationFrame(draw);
}
draw();
}
