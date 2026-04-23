const express = require('express');
const { authController } = require('../../controllers');
const validateSchema = require('../../middlewares/validateMiddleware');
const registerSchema = require('../../utils/validationSchema/registerSchema');

const router = express.Router();

router.post('/registerRole', authController.registerRole);
router.post('/register',
    validateSchema(registerSchema),
    authController.register);

module.exports = router;