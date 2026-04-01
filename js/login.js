function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin@ludwig.dev" && p==="0000"){
localStorage.setItem("auth",true);
window.location="dashboard.html";
}else{
document.getElementById("error").innerText="Error";
}
}
