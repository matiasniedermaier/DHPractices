const products = require('../data/productsDataBase.json');

const controller = {
    detail: (req, res) => {
        let product = products[req.params.id - 1];
        res.render('detail', {product: product});
    }
};

module.exports = controller;