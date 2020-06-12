const Usuario = require('./usuario.js');
const fs = require('fs');
const crypto = require('crypto');

let usuarios = [];
let usuariosJson = fs.readFileSync('./usuarios.json');
let usuario1 = new Usuario('Matias', 'matinieder@gmail.com');
let usuario2 = new Usuario('Tomas', 'tomasniedermaier@gmail.com');

if (usuariosJson.length == 0) {

    usuarios.push(usuario1);
    usuariosJson = JSON.stringify(usuarios);
    fs.writeFileSync('usuarios.json', usuariosJson);

} else {

    usuarios = JSON.parse(usuariosJson);
    let i = 0;
    let emailCoincide = 0;

    while (usuarios.length >= i && emailCoincide!=1) {

        if (usuario2.email === usuarios[i].email) {

            console.log("este email ya existe");
            emailCoincide = 1;
        }

        i++;

    }
   
    if (emailCoincide == 0) {

        usuarios.push(usuario2);
        usuariosJson = JSON.stringify(usuarios);
        fs.writeFileSync('usuarios.json', usuariosJson);

    }
    
    function Password (password) {

        let miHash = crypto.createHash('sha256').update(password).digest('hex');
    
    }

    usuarios[i] = Password(12345);

}
