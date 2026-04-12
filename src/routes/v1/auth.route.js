const express = require('express');
const { authController } = require('../../controller');
const { validateMiddleware } = require('../../middlewares');

const router = express();

router.post('/register',
    validateMiddleware.validateRegister,
    authController.registerUser);

module.exports = router;