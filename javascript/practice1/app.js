const User = require('./User');
const fs = require('fs');
const crypto = require('crypto');

let usersJson = fs.readFileSync('./users.json', 'utf-8');
let users = [];
let emailMatches = false;
// Function to encrypt password
function passwordEncrypt (x) {
    let miHash = crypto.createHash('sha256')
	.update(x)
    .digest('hex');
    return miHash;
};

// I create a new user without overwriting
let user = new User ('Brenda', 'brenda@gmail.com', '12345');
// If I have users saved
if ( usersJson.length > 0 ) {
    users = JSON.parse(usersJson);
    // I search if the email exists in the registered users
    for(let i = 0; i < users.length && !emailMatches; i++) {
        emailMatches = user.email == users[i].email;
    }
    // If the email don't exists
    if ( !emailMatches ) {
        // Password encrypt
        user.password = passwordEncrypt('12345');
        // I add the user
        users.push(user);
        usersJson = JSON.stringify(users, null, ' ');
        fs.writeFileSync('users.json', usersJson);
        console.log('You have successfully registered')
    // If the email exists
    } else {
        console.log('This email already exists');
    }
// If I don't have users saved 
} else {
    // Password encrypt
    user.password = passwordEncrypt('12345');
    // I add the user
    users.push(user);
    usersJson = JSON.stringify(users, null, ' ');
    fs.writeFileSync('users.json', usersJson);
    console.log('You have successfully registered')
} 