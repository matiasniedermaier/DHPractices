const db = require('../../database/models');

const movieApiController = {
    list: async (req, res) => {
        await db.Movies.findAll({
            include: [
                { association: "genres" },
                { association: "actors" }
            ]
        })
            .then( function( movies ) {
                for( let i = 0; i < movies.length; i++ ) {
                    movies[i].setDataValue('endpointMovie', `/api/movies/${movies[i].id}`);
                    movies[i].setDataValue('endpointGenre', `/api/genres/${movies[i].genre_id}`);
                }
                let response = {
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: '/api/movies'
                    },
                    data: movies
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log(err);
            });
    },
    detail: async (req, res) => {
        let id = req.params.id;
        await db.Movies.findByPk(id,{
            include: [
                { association: "genres" },
                { association: "actors" }
            ]
        })
            .then( function( movie ) {
                console.log(movie);
                movie.setDataValue('endpointGenre', `/api/genres/${movie.genre_id}`);
                let response = {
                    meta: {
                        status: 200,
                        url: `api/movies/${movie.id}`
                    },
                    data: movie
                };
                res.json(response);
            })
            .catch( function( err ) {
                console.log( err );
            })
    },
    create: async (req, res) => {
        await db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        });
        let response = {
            status: 200
        };
        res.json(response);
    },
    update: async (req, res) => {
        let id = req.params.id;
        await db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
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
        await db.Movies.destroy({
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

module.exports = movieApiController;