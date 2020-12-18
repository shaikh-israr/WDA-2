const express = require("express");
const router = express.Router();
const ProductControllers = require("../controllers/ProductControllers");

router.get("/list", ProductControllers.listproduct);
router.post("/add", ProductControllers.addproduct);

module.exports = router;
