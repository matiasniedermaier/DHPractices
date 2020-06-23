const Usuario = require('./user');
const fs = require('fs');
const crypto = require('crypto');

let users = [];
let usersJson = fs.readFileSync('./users.json');
let user1 = new Usuario('Matias', 'matinieder@gmail.com');
let user2 = new Usuario('Tomas', 'tomasniedermaier@gmail.com');
let user3 = new Usuario('Juanma', 'jcolomboblanco@gmail.com');

// Function to encrypt password
function Password (password) {

    let miHash = crypto.createHash('sha256')

	.update(password)

    .digest('hex'); 
    
    return miHash;

}
// If json is empty
if (usersJson.length == 0) {

    users.push(user3);
    usersJson = JSON.stringify(users);
    fs.writeFileSync('users.json', usersJson);

// If JSON is not empty
} else {

    users = JSON.parse(usersJson);
    let i = 0;
    let emailMatches = 0;

    // If the email is already registered
    while (users.length > i && emailMatches!=1) {

        if (user3.email == users[i].email) {

            console.log("this email already exists");
            emailMatches = 1;
        }

        i++;

    }
   
    // It is passed to JSON and the data is saved
    if (emailMatches == 0) {

        user3.password = Password('12345');        
        users.push(user3);
        usersJson = JSON.stringify(users);
        fs.writeFileSync('users.json', usersJson);

    }    

}
