const db = require('../database/models');
const { Op } = require('sequelize');

const movieController = {
    movies: (req, res) => {
        let limit = 12;
        let offset = 0;
        let page = req.params.page;
        let order = req.query.order;
        if( page ) {
            offset = (page - 1) * limit;
        }
        db.Movies.findAndCountAll({
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
        let promiseMovie = await db.Movies.findByPk(pkMovie);
        let promiseTopMovies = await db.Movies.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 6
        });
        Promise.all([promiseMovie, promiseTopMovies])
            .then( function([movie, topMovies]) {
                movie = movie.dataValues;
                topMovies = topMovies.map( x => { return x.dataValues })
                res.render('movies/detail', {movie, topMovies});
            })
            .catch( function(err) {
                console.log(err);
            })
    },
    new: (req, res) => {
        db.Movies.findAll({
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
    recommended: (req, res) => {
        db.Movies.findAll({
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
    search: (req, res) => {
        let search = req.query.search;
        db.Movies.findAll({
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
    }
};

module.exports = movieController;