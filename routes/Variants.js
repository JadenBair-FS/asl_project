const express = require('express');
const router = express.Router();
const variantCtrl = require('../controllers/Variants');

router.get('/', variantCtrl.index)
router.get('/new', variantCtrl.form)
router.get('/:id', variantCtrl.show)
router.get('/:id/edit', variantCtrl.form)
router.post('/', variantCtrl.create)
router.post('/:id', variantCtrl.update)
router.delete('/:id', variantCtrl.destroy)
router.post('/:id/delete', variantCtrl.destroy)

module.exports = router;

//curl -X GET http://localhost:3000/products
//curl -X GET http://localhost:3000/products/1
//curl -X POST --data "id=2&name=Product 2&description=Description 2&price=200" http://localhost:3000/products
//curl -X POST --data "id=2&name=Updated Product 2&description=Updated Description 2&price=500" http://localhost:3000/products/2
//curl -X DELETE http://localhost:3000/products/2
//curl -X POST http://localhost:3000/products/1/delete