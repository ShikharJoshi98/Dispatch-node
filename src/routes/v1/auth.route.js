const express = require('express');
const { authController } = require('../../controllers');

const router = express.Router();

router.post('/registerRole', authController.registerRole);
router.post('/register', authController.register);

module.exports = router;