// =============================
// 🛒 CARRITO (ALMACENAMIENTO)
// =============================
// Se obtiene el carrito desde localStorage
// Si no existe, se crea como arreglo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// =============================
// ➕ FUNCIÓN: AGREGAR PRODUCTO
// =============================
function addToCart(nombre, precio){

    // Se agrega el producto al carrito
    carrito.push({nombre, precio});

    // Se guarda en el navegador
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mensaje visual
    alert("Agregado al carrito 🛒");
}


// =============================
// 👀 FUNCIÓN: MOSTRAR CARRITO
// =============================
function mostrar(){

    const lista = document.getElementById("lista");
    const totalHTML = document.getElementById("total");

    // Si no existe la lista (ej: otra página), salir
    if(!lista) return;

    lista.innerHTML = "";

    let total = 0;

    // Recorrer productos
    carrito.forEach((item, index) => {

        total += item.precio;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button onclick="eliminar(${index})">❌</button>
        `;

        lista.appendChild(li);
    });

    // Mostrar total
    totalHTML.textContent = "Total: $" + total;

    // 🔥 Mensaje si está vacío
    if(carrito.length === 0){
        lista.innerHTML = "<p>El carrito está vacío 🛒</p>";
        totalHTML.textContent = "";
    }
}


// =============================
// ❌ FUNCIÓN: ELIMINAR PRODUCTO
// =============================
function eliminar(index){

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrar();
}


// =============================
// 🧹 FUNCIÓN: VACIAR CARRITO
// =============================
function vaciar(){

    carrito = [];

    localStorage.setItem("carrito", "[]");

    mostrar();
}


// =============================
// 🔢 FUNCIÓN: CONTAR PRODUCTOS
// =============================
// (para mostrar cantidad en el futuro)
function cantidad(){
    return carrito.length;
}


// =============================
// 🚀 INICIO
// =============================
mostrar();
