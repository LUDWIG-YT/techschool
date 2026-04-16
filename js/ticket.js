// =============================
// 🧾 CARGA DE DATOS
// =============================
// Se obtienen los datos guardados en el navegador

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let cliente = localStorage.getItem("cliente") || "Invitado";


// =============================
// 📅 FECHA ACTUAL
// =============================
// Se genera la fecha automáticamente

let fecha = new Date().toLocaleString();

document.getElementById("fecha").textContent = fecha;


// =============================
// 👤 CLIENTE
// =============================
// Se muestra el nombre ingresado

document.getElementById("cliente").textContent = cliente;


// =============================
// 📦 LISTA DE PRODUCTOS
// =============================

let contenedor = document.getElementById("items");

let total = 0;

// Recorre cada producto del carrito
carrito.forEach(producto => {

    let p = document.createElement("p");

    p.textContent = `${producto.nombre} - $${producto.precio}`;

    contenedor.appendChild(p);

    total += producto.precio;

});


// =============================
// 💰 TOTAL
// =============================

document.getElementById("total").textContent = "Total: $" + total;


// =============================
// 🧹 LIMPIAR CARRITO
// =============================
// Después de generar el ticket

localStorage.setItem("carrito", "[]");
