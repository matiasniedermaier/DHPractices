// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');
const { text } = require('body-parser');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	/*res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	heroes.forEach( heroe => {
		res.write('id:          ' + heroe.id + '\n');
		res.write('nombre:      ' + heroe.nombre + '\n');
		res.write('profesion:   ' + heroe.profesion + '\n');
		res.write('pais:        ' + heroe.pais + '\n');
		res.write('reseña:      ' + heroe.resenia + '\n\n');
	});*/
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = req.params.id;
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	if(heroes[heroe] != undefined)
		res.send('Hola, mi nombre es ' + heroes[heroe].nombre + 'y soy ' + heroes[heroe].profesion);
	
	// Si NO se encuentra se envía el mensaje de no encontrado
	if(heroes[heroe] == undefined)
		res.send('No encontrado');
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = req.params.id - 1;

	// Si NO se encuentra al héroe se envía un mensaje
	if (heroes[heroe] == undefined)
		res.send('No encontramos un héroe para mostrarte su biografía');

	// Si se encuentra al héroe:
	if (heroes[heroe] != undefined) {

		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		if(req.params.ok == undefined) {
			res.send(heroes[heroe].nombre + ' Lamento que no desees saber más de mi :(');
		} else {
		// Si nó vino el parámetro se envía el mensaje de error
			res.send(heroes[heroe].nombre + '\n' + heroes[heroe].resenia);
		}
	}
});

// Ruta Créditos
app.get('/creditos', (req, res) => {
	res.send('Creditos y derechos reservados a Matias Niedermaier')
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});