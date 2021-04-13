const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult, body } = require('express-validator');

const actorController = {
    actors: async (req, res) => {
        let limit = 12;
        let offset = 0;
        let page = req.params.page;
        let order = req.query.order;
        if( page ) {
            offset = (page - 1) * limit;
        }
        await db.Actors.findAndCountAll({
            order: [
                [order ? order : 'first_name', 'ASC']
            ],
            limit: limit,
            offset: offset
        })
            .then( function(data) {
                let actors = data.rows;
                let pages = Math.ceil(data.count / limit);
                actors = actors.map( x => { return x.dataValues });
                res.render('actors/actors', {actors, pages, page});
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    top: async (req, res) => {
        await db.Actors.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 10
        })
            .then( function(actors) {
                actors = actors.map( x => { return x.dataValues });
                res.render('actors/top', {actors});
            })
            .catch( function(err) {
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
            .then( function(actor) {
                actor = actor.dataValues;
                res.render('actors/detail', {actor});
            })
            .catch( function(err) {
                console.log(err);
            })
    },
    addActor: async (req, res) => {
        let promiseMovies = db.Movies.findAll({
            order: [
                ['title', 'ASC']
            ]
        });
        let promiseActors = db.Actors.findAll({
            order: [
                ['first_name', 'ASC']
            ]
        });
        Promise.all( [promiseMovies, promiseActors] )
            .then( function( [movies, actors] ) {
                movies = movies.map( x => { return x.dataValues });
                actors = actors.map( x => { return x.dataValues });
                res.render('actors/addActor', { movies, actors });
            })
            .catch( function(err) {
                console.log(err);
            });
    },
    addActorSave: async (req, res) => {
        let errors = validationResult(req);
        if( errors.isEmpty() ) {
            await db.Actor_movie.create({
                actor_id: req.body.actor,
                movie_id: req.body.movie
            });
            res.redirect('/actors');
        } else {
            let promiseMovies = db.Movies.findAll({
                order: [
                    ['title', 'ASC']
                ]
            });
            let promiseActors = db.Actors.findAll({
                order: [
                    ['first_name', 'ASC']
                ]
            });
            console.log(errors.mapped())
            Promise.all( [promiseMovies, promiseActors] )
                .then( function( [movies, actors] ) {
                    movies = movies.map( x => { return x.dataValues });
                    actors = actors.map( x => { return x.dataValues });
                    res.render('actors/addActor', { movies, actors, errors: errors.mapped(), body: req.body });
                })
                .catch( function(err) {
                    console.log(err);
                });
        }
    }
};

module.exports = actorController;