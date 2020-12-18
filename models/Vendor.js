const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  mobile: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = Vendor;
