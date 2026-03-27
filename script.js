// ANIMACIONES
const elements = document.querySelectorAll(".fade, .reveal");

function show(){
let trigger = window.innerHeight - 100;

elements.forEach(el=>{
let top = el.getBoundingClientRect().top;
if(top < trigger){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", show);
window.addEventListener("load", show);

// LAVA LAMP EFFECT
const canvas = document.getElementById("lava");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blobs = [];

for(let i=0;i<5;i++){
blobs.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:80+Math.random()*100,
dx:Math.random()*2-1,
dy:Math.random()*2-1
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

blobs.forEach(b=>{
ctx.beginPath();
ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
ctx.fillStyle="rgba(150,0,255,0.15)";
ctx.fill();

b.x+=b.dx;
b.y+=b.dy;

if(b.x<0||b.x>canvas.width)b.dx*=-1;
if(b.y<0||b.y>canvas.height)b.dy*=-1;
});

requestAnimationFrame(draw);
}

draw();
