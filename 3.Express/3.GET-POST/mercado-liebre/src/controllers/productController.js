const fs = require('fs');
const productsJSON = require('../data/productsDataBase.json');

const controller = {
    all: (req, res) => {
        let products = productsJSON;
        return res.render('products', {products: products});
    },
    detail: (req, res) => {
        let id = req.params.id - 1;
        let products = productsJSON;
        let product = products[id];
        return res.render('detail', {product: product});
    },
    create: (req, res) => {
        return res.render('create');
    },
    saveCreate: (req, res) => {
        let products = productsJSON;
        let newId = 1;
        for( let i = 0; i < products.length; i++) {
            if ( newId <= products[i].id ) {
                newId = products[i].id + 1;
            }
        }
        let newProduct = {
            id: newId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: 'img-cafetera-moulinex.jpg',
            category: 'in-sale'
        };
        products.push(newProduct);
        products = JSON.stringify(products);
        fs.writeFileSync('src/data/productsDataBase.json', products);
        return res.redirect('/products');
    },
    edit: (req, res) => {
        let id = req.params.id - 1;
        let products = productsJSON;
        let product = products[id];
        return res.render('edit', {product: product});
    },
    saveEdit: (req, res) => {
        let id = req.params.id - 1;
        let products = productsJSON;
        let product = products[id];
        product.name = req.body.name;
        product.price = req.body.price;
        product.discount = req.body.discount;
        product.description = req.body.description;
        products[id] = product;
        products = JSON.stringify(products);
        fs.writeFileSync('src/data/productsDataBase.json', products);
        return res.redirect('/products');
    },
    delete: (req, res) => {
        let id = req.params.id;
        let products = productsJSON;
        let newProducts = products.filter( x => {
            if(x.id != id) return x;
        });
        products = JSON.stringify(newProducts);
        fs.writeFileSync('src/data/productsDataBase.json', products);
        return res.redirect('/products');
    }
};

module.exports = controller;