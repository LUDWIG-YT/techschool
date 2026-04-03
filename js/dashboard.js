// =============================
// PROTECCIÓN
// =============================
if(localStorage.getItem("login") !== "true"){
    window.location.href = "index.html";
}

// =============================
// BASE PRODUCTOS (FIJOS)
// =============================
let baseProductos = [
{nombre:"Kuro Shield",precio:150,img:"img/funda1.jpg"},
{nombre:"Clear Zen",precio:120,img:"img/funda2.jpg"},
{nombre:"Oni Armor",precio:180,img:"img/funda3.jpg"},
{nombre:"Slim Shadow",precio:140,img:"img/funda4.jpg"},
{nombre:"Neon Pulse",precio:200,img:"img/funda5.jpg"},
{nombre:"Murasaki Core",precio:170,img:"img/funda6.jpg"},
{nombre:"Cyber Sakura",precio:190,img:"img/funda7.jpg"},
{nombre:"Hexa Grid",precio:160,img:"img/funda8.jpg"},
{nombre:"Titan Guard",precio:210,img:"img/funda9.jpg"},
{nombre:"Stand Pro X",precio:220,img:"img/funda10.jpg"}
];

// =============================
// ADMIN
// =============================
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// =============================
// CONSOLA
// =============================
function log(msg){
    const c = document.getElementById("console");
    let p = document.createElement("p");
    p.textContent = "> " + msg;
    c.appendChild(p);
    c.scrollTop = c.scrollHeight;
}

// =============================
// TYPEWRITER
// =============================
function escribir(texto){
    let i = 0;
    function t(){
        if(i < texto.length){
            log(texto.charAt(i));
            i++;
            setTimeout(t,20);
        }
    }
    t();
}

// =============================
// VER PRODUCTOS
// =============================
function ver(){
    log("BASE:");
    baseProductos.forEach((p,i)=>{
        log(i+" - "+p.nombre);
    });

    log("ADMIN:");
    productos.forEach((p,i)=>{
        log(i+" - "+p.nombre);
    });
}

// =============================
// COMANDOS
// =============================
function ejecutar(){

    let input = document.getElementById("cmd");
    let comando = input.value.toLowerCase();

    log(comando);

    let partes = comando.split(" ");

    switch(partes[0]){

        case "help":
            log("comandos:");
            log("agregar nombre precio");
            log("borrar index");
            log("ver");
            log("reset");
            log("hack");
            log("status");
        break;

        case "agregar":
            let nombre = partes[1];
            let precio = parseInt(partes[2]);

            if(!nombre || !precio){
                log("uso: agregar nombre precio");
                return;
            }

            productos.push({
                nombre,
                precio,
                img:"img/funda1.jpg"
            });

            localStorage.setItem("productos", JSON.stringify(productos));

            log("agregado: "+nombre);
        break;

        case "borrar":
            let index = parseInt(partes[1]);

            if(isNaN(index) || index < 0 || index >= productos.length){
                log("índice inválido");
                return;
            }

            let eliminado = productos[index].nombre;

            productos.splice(index,1);

            localStorage.setItem("productos", JSON.stringify(productos));

            log("eliminado: "+eliminado);
        break;

        case "ver":
            ver();
        break;

        case "reset":
            localStorage.removeItem("productos");
            productos=[];
            log("productos eliminados");
        break;

        case "hack":
            log("acceso concedido...");
            log("iniciando protocolo...");
        break;

        case "status":
            log("sistema estable");
            log("productos admin: "+productos.length);
        break;

        default:
            log("comando no reconocido");
    }

    input.value="";
}

// =============================
// BOTÓN RÁPIDO
// =============================
function add(){

    let nombre = document.getElementById("n").value;
    let precio = parseInt(document.getElementById("pr").value);

    if(!nombre || !precio){
        log("error: completa campos");
        return;
    }

    productos.push({
        nombre,
        precio,
        img:"img/funda1.jpg"
    });

    localStorage.setItem("productos", JSON.stringify(productos));

    log("agregado rápido: "+nombre);
}

// =============================
// LOGOUT
// =============================
function logout(){
    localStorage.removeItem("login");
    window.location.href="index.html";
}

// =============================
// MATRIX
// =============================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "01TECH";
const fontSize = 14;
const columnas = canvas.width / fontSize;

const gotas = [];
for(let i=0;i<columnas;i++) gotas[i]=1;

function dibujar(){
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff88";
    ctx.font=fontSize+"px monospace";

    for(let i=0;i<gotas.length;i++){
        const texto = letras[Math.floor(Math.random()*letras.length)];
        ctx.fillText(texto,i*fontSize,gotas[i]*fontSize);

        if(gotas[i]*fontSize > canvas.height && Math.random()>0.975){
            gotas[i]=0;
        }
        gotas[i]++;
    }
}

setInterval(dibujar,50);

// =============================
escribir("Techschool system online...");