const db = require('../../database/models');
const jwt = require('jsonwebtoken');

const userApiController = {
    login: async (req, res) => {
        let emailUser = req.body.email;
        let passwordUser = req.body.password;
        await db.Users.findAll({
            where: {
                email: emailUser,
                password: passwordUser
            }
        })
            .then( function( user ) {
                if( user[0].dataValues.remember_token ) {
                    res.json(user[0].dataValues.remember_token)
                } else {
                    const payload = {
                        user: {
                            email: user[0].dataValues.email
                        }
                    };
                    jwt.sign(
                        payload,
                        'secret',
                        {
                            expiresIn: 3600000000000
                        },
                        async function( err, token ) {
                            if( err ) {
                                res.json( err );
                            } else {
                                console.log('token generado');
                                await db.Users.update({
                                   remember_token: token 
                                },
                                {
                                    where: {
                                        id: user[0].dataValues.id
                                    }
                                });
                                res.json(token);
                            }
                        }
                    );    
                }
            })
            .catch( function( err ) {
                res.json('Credenciales Invalidas')
            })
    },
    register: (req, res) => {
        const payload = {
            user: {
                email: req.body.email
            }
        };
        jwt.sign(
            payload,
            'secret',
            {
                expiresIn: 3600000000000
            },
            async function( err, token ) {
                if( err ) {
                    console.log(err);
                } else {
                    await db.Users.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        remember_token: token
                    });
                    res.json({status: 200, token});
                }
            }
        );
    }
}


module.exports = userApiController;