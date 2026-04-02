let prods=JSON.parse(localStorage.getItem("productos"))||[];

function add(){
prods.push({nombre:n.value,precio:+pr.value});
localStorage.setItem("productos",JSON.stringify(prods));
render();
}

function render(){
l.innerHTML="";
prods.forEach(p=>l.innerHTML+=p.nombre+"<br>");
}
render();
