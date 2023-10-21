const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/Store');

router.get('/products', StoreController.index);
router.get('/products/:slug', StoreController.show);

module.exports = router;