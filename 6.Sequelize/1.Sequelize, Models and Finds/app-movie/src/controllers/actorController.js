const db = require('../database/models');
const { Op } = require('sequelize');

const actorController = {
    actors: (req, res) => {
        let limit = 12;
        let offset = 0;
        let page = req.params.page;
        let order = req.query.order;
        if( page ) {
            offset = (page - 1) * limit;
        }
        db.Actors.findAndCountAll({
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
    top: (req, res) => {
        db.Actors.findAll({
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
    }
};

module.exports = actorController;