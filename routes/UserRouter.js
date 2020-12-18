const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/UserControllers");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);

module.exports = router;
