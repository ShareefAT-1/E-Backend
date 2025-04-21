
const express = require("express");
const authController = require("../Controls/auth-control");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
