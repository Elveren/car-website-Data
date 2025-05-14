const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authControllers");

// Routes for login and registration
router.get("/login", authController.loginPage);
router.post("/login", authController.login);

router.get("/register", authController.registerPage);
router.post("/register", authController.register);

router.get("/logout", authController.logout);

module.exports = router;
