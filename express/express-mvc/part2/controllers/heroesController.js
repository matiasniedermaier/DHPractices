// Require de FS
const fs = require('fs');

// Require de PATH
const path = require('path');

// Leyendo y parseando (en array) el contenido de heroes.json
const heroesFile = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/heroes.json'), {encoding :'utf-8'}));

let heroes = {
    mainHeroes: (req, res) => {
        /*res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        heroes.forEach( heroe => {
            res.write('id:          ' + heroe.id + '\n');
            res.write('nombre:      ' + heroe.nombre + '\n');
            res.write('profesion:   ' + heroe.profesion + '\n');
            res.write('pais:        ' + heroe.pais + '\n');
            res.write('reseña:      ' + heroe.resenia + '\n\n');
        });*/
        res.send(heroesFile);
    },
    detalle: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = req.params.id -1;
        
        // Si se encuentra al héroe se envía el nombre y su profesión
        if(heroesFile[heroe] != undefined)
            res.send('Hola, mi nombre es ' + heroesFile[heroe].nombre + 'y soy ' + heroesFile[heroe].profesion);
        
        // Si NO se encuentra se envía el mensaje de no encontrado
        if(heroesFile[heroe] == undefined)
            res.send('No encontrado');
    },
    bio: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = req.params.id - 1;
    
        // Si NO se encuentra al héroe se envía un mensaje
        if (heroesFile[heroe] == undefined)
            res.send('No encontramos un héroe para mostrarte su biografía');
    
        // Si se encuentra al héroe:
        if (heroesFile[heroe] != undefined) {
    
            // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
            if(req.params.ok == undefined) {
                res.send(heroesFile[heroe].nombre + ' Lamento que no desees saber más de mi :(');
            } else {
            // Si nó vino el parámetro se envía el mensaje de error
                res.send(heroesFile[heroe].nombre + '\n' + heroesFile[heroe].resenia);
            }
        }
    }
};

module.exports = heroes;