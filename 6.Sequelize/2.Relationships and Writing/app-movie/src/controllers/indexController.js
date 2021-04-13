const db = require('../database/models');
const { Op } = require('sequelize');

const indexController = {
    index: async (req, res) => {
        let promiseMovies = await db.Movies.findAll({
            limit: 8
        });
        let promiseTopMovies = await db.Movies.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 3
        });
        let promiseNewsMovies = await db.Movies.findAll({
            where: {
                rating: {
                    [Op.gt]: 7
                }
            },
            order: [
                ['release_date', 'DESC']
            ],
            limit: 3
        });

        Promise.all([promiseMovies, promiseTopMovies, promiseNewsMovies])
            .then(function([movies, topMovies, newMovies]) {
                movies = movies.map( x => { return x.dataValues});
                topMovies = topMovies.map( x => { return x.dataValues});
                newMovies = newMovies.map( x => { return x.dataValues});
                return res.render('index', {movies, topMovies, newMovies});
            })
            .catch(function(err) {
                console.log(err);
            })
    }
};

module.exports = indexController;