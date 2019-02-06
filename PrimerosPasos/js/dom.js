'use strict'

//DOM Document Object Model

var divs = document.getElementsByTagName("div");
var valor;
for(valor in divs){
	if (divs[valor].textContent != undefined) {
		var parrafo = document.createElement('p');
		var text = document.createTextNode(divs[valor].textContent);
		parrafo.appendChild(text);
		document.querySelector("#sec").appendChild(parrafo);
	}
	
}
console.log(divs);