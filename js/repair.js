// =============================
// 🔧 MÓDULO DE REPARACIONES
// =============================
// Esta función permite enviar solicitudes de servicio
// directamente a WhatsApp con un mensaje personalizado

function w(servicio){

    // =============================
    // 📱 NÚMERO DE CONTACTO
    // =============================
    // Formato internacional México (52)
    let numero = "525611371548";


    // =============================
    // 💬 MENSAJE DINÁMICO
    // =============================
    // Se personaliza según el servicio seleccionado
    let mensaje = `Hola, quiero solicitar el servicio de ${servicio} en Techschool`;


    // =============================
    // 🔗 GENERAR URL WHATSAPP
    // =============================
    // encodeURIComponent evita errores en el mensaje
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    // =============================
    // 🚀 ABRIR WHATSAPP
    // =============================
    window.open(url, "_blank");
}
