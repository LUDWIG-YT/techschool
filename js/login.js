// =============================
// 🚀 EVENTO PRINCIPAL
// =============================
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("loginBtn");


    // =============================
    // 🔐 USUARIOS DEL EQUIPO
    // =============================
    // Cada integrante tiene acceso
    const usuarios = [
        {user:"hernandez", pass:"1234"},
        {user:"rodriguez", pass:"1234"},
        {user:"sanchez", pass:"1234"},
        {user:"brito", pass:"1234"}
    ];


    // =============================
    // 🔑 EVENTO LOGIN
    // =============================
    btn.addEventListener("click", () => {

        let user = document.getElementById("u").value.toLowerCase().trim();
        let pass = document.getElementById("p").value.trim();


        // =============================
        // 🧠 VALIDACIÓN
        // =============================
        let encontrado = usuarios.find(u => 
            u.user === user && u.pass === pass
        );


        if(encontrado){

            // Guardar sesión
            localStorage.setItem("login","true");

            // Guardar usuario activo
            localStorage.setItem("usuarioActivo", user);

            window.location.href = "dashboard.html";

        }else{
            alert("Datos incorrectos ❌");
        }

    });

});
