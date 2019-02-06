'use strict'

var boton = document.querySelector('#boton');
function changeColor(){
	var bg = boton.style.background;
	if(bg=='green'){
		boton.style.background = 'red';
	}else{
		boton.style.background = 'green';
	}
}
boton.addEventListener('click', ()=> {
	changeColor();
});

var tiempo = setInterval(()=>{
		console.log('1');
	var head = document.querySelector("h1");

	if(head.style.fontSize == "50px"){
		head.style.fontSize = "30px";
	}else{
		head.style.fontSize = "50px";
	}
}, 1000);