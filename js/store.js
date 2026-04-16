// =============================
// 📦 PRODUCTOS BASE (NO SE BORRAN)
// =============================
// Estos productos siempre existen en la tienda
// Son el catálogo principal
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
// 🧠 PRODUCTOS ADMIN (DINÁMICOS)
// =============================
// Se cargan desde el almacenamiento del navegador
// Aquí se guardan los que agregas desde el dashboard
let productosAdmin = JSON.parse(localStorage.getItem("productos")) || [];


// =============================
// 🔥 FUNCIÓN: MEZCLAR PRODUCTOS
// =============================
// Une productos base + productos del admin
function obtenerProductos(){
    return [...baseProductos, ...productosAdmin];
}


// =============================
// 🎯 DOM (ELEMENTOS HTML)
// =============================
const cont = document.getElementById("productos"); // contenedor de productos
const buscador = document.getElementById("buscar"); // input de búsqueda


// =============================
// 🖼️ FUNCIÓN: VALIDAR IMAGEN
// =============================
// Si la imagen no existe o falla, usa una por defecto
function validarImagen(img){
    if(!img || img.trim() === ""){
        return "img/default.jpg"; // imagen de respaldo
    }
    return img;
}


// =============================
// 🎨 FUNCIÓN: RENDERIZAR PRODUCTOS
// =============================
// Genera las tarjetas dinámicamente
function render(lista){

    if(!cont) return; // evita error si no existe el contenedor

    cont.innerHTML = ""; // limpia antes de renderizar

    lista.forEach((p, index) => {

        let card = document.createElement("div");
        card.className = "card";

        // Validar imagen antes de mostrar
        let imagen = validarImagen(p.img);

        card.innerHTML = `
            <img src="${imagen}" alt="${p.nombre}"
                 onerror="this.src='img/default.jpg'">
            
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>

            <button onclick="addToCart('${p.nombre}',${p.precio})">
                Agregar
            </button>
        `;

        cont.appendChild(card);

        // Animación progresiva
        setTimeout(()=>{
            card.classList.add("show");
        }, index * 80);
    });
}


// =============================
// 🚀 INICIO
// =============================
let productosTotales = obtenerProductos();
render(productosTotales);


// =============================
// 🔍 BUSCADOR DINÁMICO
// =============================
if(buscador){
    buscador.addEventListener("keyup", () => {

        let texto = buscador.value.toLowerCase();

        // Filtrar productos por nombre
        let filtrados = productosTotales.filter(p =>
            p.nombre.toLowerCase().includes(texto)
        );

        render(filtrados);
    });
}
