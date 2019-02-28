'use strict';

let div_user = document.querySelector('#users');
	getUsers()
	.then(data => data.json())
	.then(data => {
		listUsers(data);
		return getInfo();
	})
	.then(data => {
		console.log(data);
	});
function getUsers(){
	return fetch('https://jsonplaceholder.typicode.com/users');
}
function listUsers(users){
	for(let c = 0; c<100; c++){
		users.map((user, i) => {
			let register = document.createElement('ul');
			register.innerHTML = (i+1) + ". " + user.name + " " + user.email;
			div_user.append(register);
	});}
}
function getInfo(){
	let student = {
		name: 'Yos',
		lastName: 'Rocco',
		url: 'www.yosRocco.com'
	};
	return new Promise((resolve, reject) => {
		let student_string = JSON.stringify(student);
		if(typeof student_string !== 'string')return reject('error');
		return resolve(student_string);
	});


}