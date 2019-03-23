module.exports = {
  getProducts(req, res) {
    const db = req.app.get("db");
    db.elizabeth_items
      .find()
      .then(products => res.status(200).json(products))
      .catch(console.log);
  }
};
