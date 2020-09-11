const customFunctions = require('./customFunctions');

// I search the product
let product = customFunctions.searchProduct(157115);
// I edit the product
product.name = 'Cap Tommy Hilfiger';
product.price = 80;
product.stock = 50;
// I saved the product
customFunctions.editProduct(product);