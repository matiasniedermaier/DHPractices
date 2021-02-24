const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.all);

router.get('/detail/:id/:category', productController.detail);

router.get('/create', productController.create);

router.post('/create', productController.saveCreate);

router.get('/edit/:id', productController.edit);

router.put('/edit/:id', productController.saveEdit);

router.delete('/delete/:id', productController.delete);

module.exports = router;