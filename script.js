// Animación al hacer scroll

const elementos = document.querySelectorAll('.card, .fade');

const mostrar = () => {
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", mostrar);

// estado inicial
elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s";
});

