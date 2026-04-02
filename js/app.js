const hero=document.getElementById("hero");

window.addEventListener("scroll",()=>{
hero.style.opacity=window.scrollY>50?"0":"1";
});
