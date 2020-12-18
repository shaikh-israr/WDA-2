const Product = require("./../models/Product");

const addproduct = (req, res, next) => {
  let upldproduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  upldproduct
    .save()
    .then((response) => {
      res.json({
        message: "product add",
      });
    })
    .catch((error) => [
      res.json({
        message: "faild ",
      }),
    ]);
};

const listproduct = (req, res, next) => {
  Product.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "error",
      });
    });
};

module.exports = {
  listproduct,
  addproduct,
};
