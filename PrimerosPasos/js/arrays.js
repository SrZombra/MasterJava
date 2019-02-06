'use strict'

/*var Numbers = ['One', 'Two', 'Three',['One', 'For']];
Numbers.forEach((elemento)=>{
	document.write(elemento+"<br>");
});
console.log(Numbers);
Numbers.push("Five");
console.log(Numbers);
------------------------------------------------------------------------------------------*/

var numbers = [];
for(var i = 0; i < 6; i++){
	numbers[i] = (parseInt(prompt('Enter the number '+(i+1) )));
}
function show(array){
	array.forEach((element) => {
		document.write(element+"<br>");
		console.log(element);
	});
	document.write("********************************** <br>");
	console.log   ("**********************************");
}
show(numbers);
show(numbers.sort());
show(numbers.reverse());
console.log(numbers.length);
var find = prompt('Enter number you want to find');
function searchNumber(array, number){
	var f = array.findIndex(element => element == number);
	if(f > -1){
		console.log("Find: "+array.find(element => element == number));	
		console.log("Index: "+array.findIndex(element => element == number));
	}else{
		console.log("We cant find");
	}
}
searchNumber(numbers, find);


