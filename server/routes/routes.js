const { getProducts } = require("../controller/itemCtrl");

module.exports = app => {
  app.get("/api/products", getProducts);
};
