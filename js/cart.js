let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function addToCart(nombre, precio) {
    carrito.push({nombre, precio});
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado");
}

function mostrarCarrito() {
    let lista = document.getElementById("lista");
    if (!lista) return;

    lista.innerHTML = "";

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;
        lista.appendChild(li);
    });
}

mostrarCarrito();
