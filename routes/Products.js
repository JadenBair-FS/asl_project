const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/Products");

router.get("/", productCtrl.index);
router.get("/new", productCtrl.form);
router.get("/:id", productCtrl.show);
router.get("/:id/edit", productCtrl.form);
router.post("/", productCtrl.create);
router.post("/:id", productCtrl.update);
router.delete("/:id", productCtrl.destroy);
router.post("/:id/delete", productCtrl.destroy);

module.exports = router;

//curl -X GET http://localhost:3000/products
//curl -X GET http://localhost:3000/products/1
//curl -X POST --data "id=2&name=Product 2&description=Description 2&price=200" http://localhost:3000/products
//curl -X POST --data "id=2&name=Updated Product 2&description=Updated Description 2&price=500" http://localhost:3000/products/2
//curl -X DELETE http://localhost:3000/products/2
//curl -X POST http://localhost:3000/products/1/delete
