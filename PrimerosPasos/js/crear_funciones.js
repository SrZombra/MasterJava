'use strict'

function calculator(){
	return "	Result of the calculator	";
}
console.log(calculator());

//Anonymous function
var a = (N1, N2) => {
	document.write(N1+N2);
}
//a(1,2);
console.log('tamaño de la variable con funcion anónima: '+a.length);

var text = ['Welcome', 'JS'];
console.log('tamaño del arreglo: '+text.length);

var total = a + text;
console.log(typeof total);

// Search Method
var search = calculator();
console.log(search.match('osf')); // false = Null, true = Array
console.log(search.substr(7,2));
console.log(search.split(" "));
console.log(search.trim());


