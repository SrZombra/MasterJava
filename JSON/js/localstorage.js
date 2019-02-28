'use strict'


// Check LocalStorage
if(typeof (Storage) !== 'undefined'){
	console.log("Available");
}else{
	console.log("Ups!");
}
// Save Data
localStorage.setItem("Title", "localStorage.");
// Recovery Data
document.querySelector("#films").innerHTML = localStorage.getItem("Title");

var user = {
	name: 'Z',
	mail: 'Z@',
	web: 'z.'
};
// Save JSON Storage
localStorage.setItem("user", JSON.stringify(user));
//  REcovery
console.log(JSON.parse(localStorage.getItem("user")));
