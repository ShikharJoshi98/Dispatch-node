const express = require("express");

const { branchController } = require("../../controllers");

const router = express.Router();

router.post('/create', branchController.create)

module.exports = router;