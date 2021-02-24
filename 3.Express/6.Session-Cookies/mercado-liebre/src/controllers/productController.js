const fs = require('fs');
const products = JSON.parse(fs.readFileSync(__dirname + '/../data/productsDataBase.json', {encoding: 'utf-8'}));

const controller = {
    all: (req, res) => {
        return res.render('products/products', {products: products});
    },
    detail: (req, res) => {
        let id = req.params.id - 1;
        let product = products[id];
        return res.render('products/detail', {product: product});
    },
    create: (req, res) => {
        return res.render('products/create');
    },
    saveCreate: (req, res) => {
        let newProducts = products;
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
        newProducts.push(newProduct);
        let productsJSON = JSON.stringify(newProducts, null, ' ');
        fs.writeFileSync('src/data/productsDataBase.json', productsJSON);
        return res.redirect('/products');
    },
    edit: (req, res) => {
        let id = req.params.id - 1;
        let product = products[id];
        return res.render('products/edit', {product: product});
    },
    saveEdit: (req, res) => {
        let id = req.params.id - 1;
        let newProducts = products;
        let product = newProducts[id];
        product.name = req.body.name;
        product.price = req.body.price;
        product.discount = req.body.discount;
        product.description = req.body.description;
        newProducts[id] = product;
        let productsJSON = JSON.stringify(newProducts, null, ' ');
        fs.writeFileSync('src/data/productsDataBase.json', productsJSON);
        return res.redirect('/products');
    },
    delete: (req, res) => {
        let id = req.params.id;
        let newProducts = products.filter( x => {
            if(x.id != id) return x;
        });
        let productsJSON = JSON.stringify(newProducts, null, ' ');
        fs.writeFileSync('src/data/productsDataBase.json', productsJSON);
        return res.redirect('/products');
    }
};

module.exports = controller;