let movieContent = document.querySelector('#pelicula ul');
function Movie( name, director, length, actor ) {
    this.name = name;
    this.director = director;
    this.length = length;
    this.actor = actor;
}

alert('Vamos a pedirte información de tu película favorita!')
let nameMovie = prompt('Cuál es el nombre?');
let director = prompt('Cuál es el director?');
let lengthMovie = prompt('Cuál es la duración?');
let actor = prompt('Cuál es el actor principal?');

let movie = new Movie( nameMovie, director, lengthMovie, actor );

document.querySelector('#pelicula').style.display = 'block';

let urlName = prompt('Ingresa el sitio de la película');

document.querySelector('#nombre').innerHTML = `<a>${movie.name}</a>`;
document.querySelector('#nombre a').href = urlName;
document.querySelector('#nombre a').style.textDecoration = 'none';
document.querySelector('#nombre a').style.color = 'red';
document.querySelector('#director').innerText = movie.director;
document.querySelector('#duracion').innerText = movie.length;
document.querySelector('#actor').innerText = movie.actor;
