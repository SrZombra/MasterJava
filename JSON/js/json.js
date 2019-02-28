'use strict'

var Film = {
	title: 'Always',
	country: 'Colombia',
	year: 2019
};
var Films = [
	{title: 'Broly', country: 'Mexico', year: 2018},
	Film,
	{title: 'Los 7 Pecados', country: 'Japon', year: 2000}
]; 
var boxFilms = document.querySelector('#films');
var index;
for(index in Films){
	var p = document.createElement('p');
	p.append(Films[index].title + " - " + Films[index].year + " - " + Films[index].country);
	boxFilms.append(p);
}