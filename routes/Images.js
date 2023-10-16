const express = require("express");
const router = express.Router();
const imageCtrl = require("../controllers/Images");

router.get("/", imageCtrl.index);
router.get("/new", imageCtrl.form);
router.get("/:id", imageCtrl.show);
router.get("/:id/edit", imageCtrl.form);
router.post("/", imageCtrl.create);
router.post("/:id", imageCtrl.update);
router.delete("/:id", imageCtrl.destroy);
router.post("/:id/delete", imageCtrl.destroy);

module.exports = router;

//curl -X GET http://localhost:3000/products
//curl -X GET http://localhost:3000/products/1
//curl -X POST --data "id=2&name=Product 2&description=Description 2&price=200" http://localhost:3000/products
//curl -X POST --data "id=2&name=Updated Product 2&description=Updated Description 2&price=500" http://localhost:3000/products/2
//curl -X DELETE http://localhost:3000/products/2
//curl -X POST http://localhost:3000/products/1/delete
