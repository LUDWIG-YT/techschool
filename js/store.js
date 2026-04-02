let productos=JSON.parse(localStorage.getItem("productos"))||[
{nombre:"Kuro Shield",precio:150},
{nombre:"Oni Armor",precio:180}
];

const cont=document.getElementById("productos");
const busc=document.getElementById("buscar");

function render(lista){
cont.innerHTML="";
lista.forEach(p=>{
cont.innerHTML+=`
<div class="card show">
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<button onclick="addToCart('${p.nombre}',${p.precio})">Agregar</button>
</div>`;
});
}
render(productos);

busc.addEventListener("keyup",()=>{
render(productos.filter(p=>p.nombre.toLowerCase().includes(busc.value.toLowerCase())));
});
