var express = require('express');
var router = express.Router();
const inderController = require('../controllers/index');

/* GET home page. */
router.get('/', inderController.index);

module.exports = router;
