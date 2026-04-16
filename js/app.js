// =============================
// 🚀 EVENTO PRINCIPAL
// =============================
// Se ejecuta cuando la página termina de cargar
document.addEventListener("DOMContentLoaded", () => {

    console.log("Techschool cargado 🚀");


    // =============================
    // 🎯 EFECTO HERO (SCROLL FADE)
    // =============================
    // Hace que el hero se desvanezca al hacer scroll
    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {

        let scroll = window.scrollY;

        if(hero){

            // 🔥 efecto de desvanecimiento
            hero.style.opacity = Math.max(1 - scroll / 300, 0);

            // 🔥 movimiento hacia abajo
            hero.style.transform = `translateY(${scroll * 0.3}px)`;
        }

    });


    // =============================
    // ✨ SCROLL REVEAL (ANIMACIÓN)
    // =============================
    // Detecta cuando un elemento entra en pantalla
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                // Agrega clase para animación
                entry.target.classList.add("show");

            }

        });

    });


    // =============================
    // 📦 APLICAR A TARJETAS
    // =============================
    document.querySelectorAll(".card").forEach(card => {
        observer.observe(card);
    });


    // =============================
    // 🧠 EXTRA: EFECTO HOVER SONIDO (OPCIONAL)
    // =============================
    // (comentado por si lo quieres usar después)

    /*
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            console.log("hover botón");
        });
    });
    */


    // =============================
    // 📊 DEBUG OPCIONAL
    // =============================
    console.log("Animaciones activas ✅");

});
