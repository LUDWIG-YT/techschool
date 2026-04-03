// =============================
// CARRITO
// =============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// =============================
// AGREGAR
// =============================

function addToCart(nombre, precio){

    carrito.push({nombre, precio});

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregado al carrito 🛒");
}

// =============================
// MOSTRAR
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
}

// =============================
// ELIMINAR
// =============================

function eliminar(index){

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrar();
}

// =============================
// VACIAR
// =============================

function vaciar(){

    carrito = [];

    localStorage.setItem("carrito", "[]");

    mostrar();
}

mostrar();