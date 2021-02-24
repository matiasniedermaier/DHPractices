const fs = require('fs');
const bcrypt = require('bcrypt');
const users = JSON.parse(fs.readFileSync(__dirname + '/../data/usersDataBase.json', {encoding: 'utf-8'}));

const controller = {
    create: (req, res) => {
        return res.render('users/create');
    },
    createSave: (req, res, next) => {
        let newUsers = users;
        let emailValid = false;
        newUsers.forEach( x => {
            if( x.email == req.body.email ) emailValid = true; 
        });
        if( !emailValid ) {
            let hashPassword = bcrypt.hashSync(req.body.password, 10);
            let user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashPassword,
                avatar: req.files[0].filename
            };
            newUsers.push(user);
            let usersJSON = JSON.stringify(newUsers, null, ' ');
            fs.writeFileSync('src/data/usersDataBase.json', usersJSON);
            return res.redirect('/users/profile');
        } else {
            return res.redirect('/users/register');
        }
    },
    profile: (req, res) => {
        let user = users[users.length - 1];
        return res.render('users/profile', {user: user});
    }
};

module.exports = controller;