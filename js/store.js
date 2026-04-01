function renderGrid(id,cat){

let data=[
{id:"zen",nombre:"Zen",precio:299,categoria:"fundas"},
{id:"sakura",nombre:"Sakura",precio:249,categoria:"fundas"},
{id:"neo",nombre:"Neo",precio:199,categoria:"fundas"},
{id:"cargador",nombre:"Cargador",precio:399,categoria:"accesorios"}
];

let grid=document.getElementById(id);

data.filter(p=>p.categoria==cat).forEach(p=>{
grid.innerHTML+=`
<div class="card">
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<button onclick="add('${p.id}')">Comprar</button>
</div>`;
});

}

function add(id){
alert("Añadido 🛒");
}
