const express = require("express");
const router = express.Router();
const VendorControllers = require("../controllers/VendorControllers");

router.post("/register", VendorControllers.register);
router.post("/login", VendorControllers.login);

module.exports = router;
