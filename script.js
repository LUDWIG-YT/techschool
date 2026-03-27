// Animación al hacer scroll

const revealElements = document.querySelectorAll('.reveal, .fade');

function reveal(){
    let windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        let elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);

// estado inicial
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
});
