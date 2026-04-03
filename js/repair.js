// =============================
// REPARACIONES
// =============================

function w(servicio){

    let numero = "525611371548";

    let mensaje = `Hola, quiero solicitar ${servicio}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}