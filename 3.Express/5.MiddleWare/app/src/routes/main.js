const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', controller.home);

router.get('/admin', adminMiddleware, controller.admin);

router.get('/services', controller.services);

module.exports = router;