const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');

router.post('/login', userApiController.login);

router.post('/register', userApiController.register);

module.exports = router;