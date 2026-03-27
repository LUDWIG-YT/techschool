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

// LAVA PREMIUM
const canvas = document.getElementById("lava");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let blobs = [];

for(let i=0;i<6;i++){
blobs.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:100+Math.random()*120,
dx:Math.random()*1-0.5,
dy:Math.random()*1-0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

blobs.forEach(b=>{
let gradient = ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);
gradient.addColorStop(0,"rgba(180,0,255,0.25)");
gradient.addColorStop(1,"transparent");

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
ctx.fill();

b.x+=b.dx;
b.y+=b.dy;

if(b.x<0||b.x>canvas.width)b.dx*=-1;
if(b.y<0||b.y>canvas.height)b.dy*=-1;
});

requestAnimationFrame(draw);
}

draw();
