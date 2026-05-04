const express = require("express");

const { designationController } = require("../../controllers");

const router = express.Router();

router.post('/create', designationController.create)

module.exports = router;