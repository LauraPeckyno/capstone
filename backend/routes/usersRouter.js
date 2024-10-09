const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// log in functionality related
router.post('/api/users', usersController.create);  // Register new user
router.post('/api/users/login', usersController.login);  // Login user
router.get('/api/users/check-token', ensureLoggedIn, usersController.checkToken);  // Check token

module.exports = router;