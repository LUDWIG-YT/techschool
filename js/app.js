// =============================
// ANIMACIONES GENERALES
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Techschool cargado 🚀");

    // HERO EFECTO FADE
    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;

        if(hero){
            hero.style.opacity = Math.max(1 - scroll / 300, 0);
            hero.style.transform = `translateY(${scroll * 0.3}px)`;
        }
    });

    // =============================
    // SCROLL REVEAL
    // =============================

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    });

    document.querySelectorAll(".card").forEach(card => {
        observer.observe(card);
    });

});