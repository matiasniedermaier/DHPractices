const db = require('../../database/models');

const genreApiController = {
    list: async (req, res) => {
        await db.Genres.findAll({
            include: {
                association: "movies"
            }
        })
            .then( function( genres ) {
                for( let i = 0; i < genres.length; i++ ) {
                    genres[i].setDataValue('endpoint', `/api/genres/${genres[i].id}`);
                    for( movieGenre of genres[i].movies ) {
                        movieGenre.setDataValue('endpoint', `/api/movies/${movieGenre.id}`);
                    }
                }
                let response = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: '/api/genres'
                    },
                    data: genres
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log(err);
            });
    },
    detail: async (req, res) => {
        let id = req.params.id;
        await db.Genres.findByPk(id, {
            include: {
                association: "movies"
            }
        })
            .then( function( genre ) {
                for( movieGenre of genre.movies ) {
                    movieGenre.setDataValue('endpoint', `/api/movies/${movieGenre.id}`);
                }
                let response = {
                    meta: {
                        status: 200,
                        url: `api/actors/${genre.id}`
                    },
                    data: genre
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log( err );
            })
    },
    create: async (req, res) => {
        let rankingNumber = await db.Genres.findAll()
            .then( function( genres ) {
                return genres.length + 1;
            });
        await db.Genres.create({
            name: req.body.name,
            ranking: rankingNumber
        });
        let response = {
            status: 200
        };
        res.json(response);
    },
    update: async (req, res) => {
        let id = req.params.id;
        await db.Genres.update({
            name: req.body.name
        },
        {
            where: {
                id: id
            }
        });
        let response = {
            status: 200
        };
        res.json(response);
    },
    delete: async (req, res) => {
        await db.Genres.destroy({
            where: {
                id: req.params.id
            }
        });
        let response = {
            status: 200
        }
        res.json(response);
    }
};

module.exports = genreApiController;