const db = require('../../database/models');

const actorApiController = {
    list: async (req, res) => {
        await db.Actors.findAll({
            include: {
                association: "movies"
            }
        })
            .then( function( actors ) {
                for( let i = 0; i < actors.length; i++ ) {
                    actors[i].setDataValue('endpointActor', `/api/actors/${actors[i].id}`);
                    for( movie of actors[i].movies ) {
                        movie.setDataValue('endpointMovie', `/api/movies/${movie.id}`);
                    }
                }
                let response = {
                    meta: {
                        status: 200,
                        total: actors.length,
                        url: '/api/actors'
                    },
                    data: actors
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log(err);
            });
    },
    detail: async (req, res) => {
        let id = req.params.id;
        await db.Actors.findByPk(id, {
            include: {
                association: "movies"
            }
        })
            .then( function( actor ) {
                for( movie of actor.movies ) {
                    movie.setDataValue('endpointMovie', `/api/movies/${movie.id}`);
                }
                let response = {
                    meta: {
                        status: 200,
                        url: `api/actors/${actor.id}`
                    },
                    data: actor
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log( err );
            })
    },
    create: async (req, res) => {
        await db.Actors.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id
        });
        let response = {
            status: 200
        };
        res.json(response);
    },
    update: async (req, res) => {
        let id = req.params.id;
        await db.Actors.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id
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
        await db.Actor_movie.destroy({
            where: {
                movie_id: req.params.id
            }
        });
        await db.Actors.destroy({
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

module.exports = actorApiController;