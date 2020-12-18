const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;
const app = express();

const UserRouter = require("./routes/UserRouter");
const VendorRouter = require("./routes/VendorRouter");
const ProductRouter = require("./routes/ProductRouter");

mongoose.connect("mongodb://localhost:27017/task", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user", UserRouter);
app.use("/api/vendor", VendorRouter);
app.use("/vender", ProductRouter);

app.listen(port, () => {
  console.log(`server running port ${port}`);
});
