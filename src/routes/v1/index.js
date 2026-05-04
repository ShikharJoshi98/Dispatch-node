const express = require("express");

const authRoute = require("./authRoute");
const branchRoute = require("./branchRoute");
const designationRoute = require("./designationRoute");

const router = express.Router();

router.use('/auth', authRoute);
router.use('/branch', branchRoute);
router.use('/designation', designationRoute);

module.exports = router;