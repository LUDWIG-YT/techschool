if(!localStorage.getItem("auth")){
window.location="login.html";
}

document.getElementById("cmd").addEventListener("keydown",e=>{
if(e.key==="Enter"){
alert("Comando ejecutado");
}
});
