const User = require('./User');
const fs = require('fs');
const crypto = require('crypto');
let usersJson = fs.readFileSync('./users.json');
let users = [];
let i = 0;
let emailMatches = false;

function password (x) {
    let miHash = crypto.createHash('sha256')

	.update(x)

    .digest('hex');
    
    return miHash;
}


/* <-- I create a new user without overwriting */
let user = new User ('Tomas', 'tomas@gmail.com');

if ( usersJson.length > 0 ) {

    users = JSON.parse(usersJson);
    /* <-- I search if the email exists in the registered users --> */
    while ( users.length > i && !emailMatches ) {

        if ( user.email == users[i].email ) {

            emailMatches = true;

        }

        i++;
    }
    if ( emailMatches == false ) {

        user.password = password('12345')
        users.push(user);
        usersJson = JSON.stringify(users);
        fs.writeFileSync('users.json', usersJson);

    } else {

        console.log('This email already exists')
        
    }

} else {

    usersJson = JSON.stringify(user);
    fs.writeFileSync('users.json', usersJson);

}