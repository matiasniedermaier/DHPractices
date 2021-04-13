const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult, body } = require('express-validator');

const movieController = {
    movies: async (req, res) => {
        let limit = 12;
        let offset = 0;
        let page = req.params.page;
        let order = req.query.order;
        if( page ) {
            offset = (page - 1) * limit;
        }
        await db.Movies.findAndCountAll({
            order: [
                [order ? order : 'title', 'ASC']
            ],
            limit: limit,
            offset: offset
        })
            .then( function(data) {
                let movies = data.rows;
                let pages = Math.ceil(data.count / limit);
                movies = movies.map( x => { return x.dataValues});
                res.render('movies/movies', {movies, pages, page});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    detail: async (req, res) => {
        let pkMovie = req.params.id;
        let promiseMovie = await db.Movies.findByPk(pkMovie, {
            include: [
                { association: "genres" },
                { association: "actors" }
            ]
        });
        let promiseTopMovies = await db.Movies.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 6
        });
        Promise.all([promiseMovie, promiseTopMovies])
            .then( function([movie, topMovies]) {
                movie = movie.dataValues;
                console.log(movie)
                topMovies = topMovies.map( x => { return x.dataValues })
                res.render('movies/detail', {movie, topMovies});
            })
            .catch( function(err) {
                console.log(err);
            })
    },
    new: async (req, res) => {
        await db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then( function(movies) {
                movies = movies.map( x => { return x.dataValues });
                res.render('movies/new', {movies});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    recommended: async (req, res) => {
        await db.Movies.findAll({
            where: {
                rating: {
                    [Op.gt]: 8
                }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then( function(movies) {
                movies = movies.map( x => { return x.dataValues });
                res.render('movies/recommended', {movies});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    search: async (req, res) => {
        let search = req.query.search;
        await db.Movies.findAll({
            where: {
                title: {
                    [Op.like]: '%' + search + '%'
                }
            },
            order: [
                ['title', 'ASC']
            ]
        })
            .then( function(movies) {
                movies = movies.map( x => { return x.dataValues });
                res.render('movies/search', {movies});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    create: async (req, res) => {
        await db.Genres.findAll()
            .then( function(genres) {
                genres = genres.map( x => { return x.dataValues });
                res.render('movies/create', {genres});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    saveCreate: async (req, res) => {
        let errors = validationResult(req);
        if( errors.isEmpty() ) {
            await db.Movies.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            });
            res.redirect('/movies');
        } else {
            await db.Genres.findAll()
                .then( function(genres) {
                    genres = genres.map( x => { return x.dataValues });
                    res.render('movies/create', {genres, errors: errors.mapped(), body: req.body});
                })
                .catch( function(err) {
                    console.log(err);
                });
        }
    },
    edit: async (req, res) => {
        let id = req.params.id;
        let promiseMovie = await db.Movies.findByPk(id);
        let promiseGenres = await db.Genres.findAll();
        Promise.all([promiseMovie, promiseGenres])
            .then( function([movie, genres]) {
                movie = movie.dataValues;
                let year = movie.release_date.getFullYear();
                let month = movie.release_date.getMonth() + 1;
                let day = movie.release_date.getDate() + 1;
                if( month < 10 ) month = `0${month}`;
                if( day < 10 ) day = `0${day}`;
                movie.release_date = `${year}-${month}-${day}`;
                genres = genres.map( x => { return x.dataValues });
                res.render('movies/edit', {movie, genres});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    saveEdit: async (req, res) => {
        let errors = validationResult(req);
        if( errors.isEmpty() ) {
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
                    id: req.params.id
                }
            });
            res.redirect('/movies');
        } else {
            let id = req.params.id;
            let promiseMovie = await db.Movies.findByPk(id);
            let promiseGenres = await db.Genres.findAll();
            Promise.all([promiseMovie, promiseGenres])
                .then( function([movie, genres]) {
                    movie = movie.dataValues;
                    let year = movie.release_date.getFullYear();
                    let month = movie.release_date.getMonth() + 1;
                    let day = movie.release_date.getDate() + 1;
                    if( month < 10 ) month = `0${month}`;
                    if( day < 10 ) day = `0${day}`;
                    movie.release_date = `${year}-${month}-${day}`;
                    genres = genres.map( x => { return x.dataValues });
                    res.render('movies/edit', {movie, genres, errors: errors.mapped(), body: req.body});
                })
                .catch( function(err) {
                    console.log(err);
                });
        }
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
        res.redirect('/movies');
    },
    genres: async (req, res) => {
        await db.Genres.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
            .then( function(genres) {
                genres = genres.map( x => { return x.dataValues });
                res.render('movies/genres', {genres});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    genresDetail: async (req, res) => {
        let id = req.params.id;
        await db.Genres.findByPk(id, {
            include: {
                association: "movies"
            }
        })
            .then( function(genre) {
                genre = genre.dataValues;
                res.render('movies/genresDetail', {genre});
            })
            .catch( function(err) {
                console.log(err);
            });
    }
};

module.exports = movieController;