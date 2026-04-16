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

    carrito.push({nombre, precio});

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregado al carrito 🛒");
}


// =============================
// 👀 FUNCIÓN: MOSTRAR CARRITO
// =============================
function mostrar(){

    const lista = document.getElementById("lista");
    const totalHTML = document.getElementById("total");

    if(!lista) return;

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {

        total += item.precio;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button onclick="eliminar(${index})">❌</button>
        `;

        lista.appendChild(li);
    });

    totalHTML.textContent = "Total: $" + total;

    // 🛒 Mensaje si está vacío
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
function cantidad(){
    return carrito.length;
}


// =============================
// 💳 FUNCIÓN: COMPRA (TICKET PRO)
// =============================
function comprar(){

    // 🛑 Validar carrito
    if(carrito.length === 0){
        alert("El carrito está vacío 🛒");
        return;
    }

    // 👤 Pedir nombre
    let nombre = prompt("Ingresa tu nombre:");

    if(!nombre || nombre.trim() === ""){
        alert("Debes ingresar un nombre válido");
        return;
    }

    // 💾 Guardar cliente
    localStorage.setItem("cliente", nombre.trim());

    // 🚀 Ir al ticket
    window.location.href = "ticket.html";
}


// =============================
// 🚀 INICIO
// =============================
mostrar();
