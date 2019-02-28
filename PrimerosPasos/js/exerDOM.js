'use strict'

window.addEventListener('load', ()=>{
	console.log('DOM Loaded');
	var form = document.querySelector('#formulario');
	var boxDashed = document.querySelector('.dashed');
	boxDashed.style.display = 'none';
	form.addEventListener('submit', () => {
		var nombre = document.querySelector('#name').value; 
		var apellido = document.querySelector("#lastname").value; 
		var edad = document.querySelector("#age").value;
		boxDashed.style.display = 'block';
		var data = [nombre, apellido, edad];
		var indice;
		for(indice in data){
			var parrafo = document.createElement('p');
			parrafo.append(data[indice]);
			boxDashed.append(parrafo);
		}
	});
});