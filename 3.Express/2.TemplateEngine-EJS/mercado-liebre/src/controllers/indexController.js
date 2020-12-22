const products = require('../data/productsDataBase.json');

const controller = {
    index: (req, res) => {
        res.render('index', {products: products});
    }
}

module.exports = controller;