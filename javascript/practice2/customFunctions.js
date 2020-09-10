const fs = require('fs');

let customFunctions = {
    // Read products
    products: function () {
        let productsJson = fs.readFileSync('./products.json', 'utf-8');
        return productsJson.length > 0 ? JSON.parse(productsJson) : [];
    },
    // Create product
    createProduct: function (x) {
        let products = this.products();

        // I ask if there are saved products
        if (products.length > 0) {
            // I ask if the code exists
            if ( products.find( product => product.code == x.code) ) {
                return console.log('This code already exists');
            } else {
                products.push(x);
                fs.writeFileSync('./products.json', JSON.stringify(products, null, ' '));
                return console.log('Was saved successfully')
            }
        } else {
            products.push(x);
            fs.writeFileSync('./products.json', JSON.stringify(products, null, ' '));
            return console.log('Was saved successfully');
        }
    },
    // Search product
    searchProduct: function (code) {
        let products = this.products();
        let product = products.find( product => product.code == code);
        // If i found it, return the product if it is not return the console.log()
        return product ? product : console.log('The product dont exist with that code');
    },
    // Edit Product
    editProduct: function (product) {
        let products = this.products();
        // I filter products that dont have the edited product code
        products = products.filter( x => x.code != product.code );
        products.push(product);
        fs.writeFileSync('./products.json', JSON.stringify(products, null, ' '));
        return console.log('Was saved successfully');
    }
};

module.exports = customFunctions;