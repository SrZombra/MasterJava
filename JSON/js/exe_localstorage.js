'use strict'

var form = document.querySelector("#FormFilms");
form.addEventListener('submit', () => {
	var Film = document.querySelector('#addFilm').value;

	if(Film.length > 0){
		localStorage.setItem(Film, Film);
	}
});
var ul = document.querySelector('#listFilms');
for(var i in localStorage){
	if(typeof localStorage[i] == 'string'){
		var li = document.createElement('li');
		li.append(localStorage[i]);
		ul.append(li);
	}
}
var formb = document.querySelector("#FormbFilms");
formb.addEventListener('submit', () => {
	var Film = document.querySelector('#remoFilm').value;

	if(Film.length > 0){
		localStorage.removeItem(Film);
	}
});