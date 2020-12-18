const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
