let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

function addToCart(n,p){
carrito.push({n,p});
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function mostrar(){
let l=document.getElementById("lista");
let t=document.getElementById("total");
if(!l)return;
l.innerHTML="";
let total=0;
carrito.forEach((i,idx)=>{
total+=i.p;
l.innerHTML+=`${i.n} $${i.p} <button onclick="del(${idx})">x</button><br>`;
});
t.textContent="Total: $"+total;
}
function del(i){
carrito.splice(i,1);
localStorage.setItem("carrito",JSON.stringify(carrito));
mostrar();
}
mostrar();
