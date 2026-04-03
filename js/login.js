document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("loginBtn");

    btn.addEventListener("click", () => {

        let user = document.getElementById("u").value;
        let pass = document.getElementById("p").value;

        if(user === "admin" && pass === "1234"){
            localStorage.setItem("login","true");
            window.location.href = "dashboard.html";
        }else{
            alert("Datos incorrectos");
        }

    });

});