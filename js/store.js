// =============================
// PRODUCTOS BASE (SIEMPRE EXISTEN)
// =============================
let baseProductos = [
{nombre:"Kuro Shield",precio:150,img:"img/funda1.jpg"},
{nombre:"Clear Zen",precio:120,img:"img/funda2.jpg"},
{nombre:"Oni Armor",precio:180,img:"img/funda3.jpg"},
{nombre:"Slim Shadow",precio:140,img:"img/funda4.jpg"},
{nombre:"Neon Pulse",precio:200,img:"img/funda5.jpg"},
{nombre:"Murasaki Core",precio:170,img:"img/funda6.jpg"},
{nombre:"Cyber Sakura",precio:190,img:"img/funda7.jpg"},
{nombre:"Hexa Grid",precio:160,img:"img/funda8.jpg"},
{nombre:"Titan Guard",precio:210,img:"img/funda9.jpg"},
{nombre:"Stand Pro X",precio:220,img:"img/funda10.jpg"}
];

// =============================
// PRODUCTOS ADMIN (SOLO EXTRA)
// =============================
let productosAdmin = JSON.parse(localStorage.getItem("productos")) || [];

// =============================
// MEZCLA FINAL (CLAVE 🔥)
// =============================
function obtenerProductos(){
    return [...baseProductos, ...productosAdmin];
}

// =============================
// DOM
// =============================
const cont = document.getElementById("productos");
const buscador = document.getElementById("buscar");

// =============================
// RENDER
// =============================
function render(lista){

    if(!cont) return;

    cont.innerHTML = "";

    lista.forEach((p, index) => {

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button onclick="addToCart('${p.nombre}',${p.precio})">
                Agregar
            </button>
        `;

        cont.appendChild(card);

        setTimeout(()=>{
            card.classList.add("show");
        }, index * 80);
    });
}

// =============================
// INICIO
// =============================
let productosTotales = obtenerProductos();
render(productosTotales);

// =============================
// BUSCADOR
// =============================
if(buscador){
    buscador.addEventListener("keyup", () => {

        let texto = buscador.value.toLowerCase();

        let filtrados = productosTotales.filter(p =>
            p.nombre.toLowerCase().includes(texto)
        );

        render(filtrados);
    });
}