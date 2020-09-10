const fs = require('fs');
const Product = require('./Product');
const editProduct = require('./editProduct');
const customFunctions = require('./customFunctions');

let product1 = new Product('T-shirt Calvin Klein', 157115, 50, 60);

// I create product
customFunctions.createProduct(product1);
