const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearProducto(nombre,modelo,precio) {
	contador++;
	img = "<img class='producto-img' src='img/icono.PNG'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3 id='${modelo}'></h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number
}
let documentFragment = document.createDocumentFragment();
for (var i = 1; i <= 20; i++){
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let producto = crearProducto(`producto ${i}`,`modelo ${modeloRandom}`,precioRandom);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML = producto[0] + producto[1] + producto[2] + producto[3];
	documentFragment.appendChild(div);
	
}
contenedor.appendChild(documentFragment);