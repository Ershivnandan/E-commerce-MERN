const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controller/productcontroller');

const router = express.Router();

router.get('/products',getAllProducts);
router.post("/product/new", createProduct);
router.put("/product/:id", updateProduct).delete(deleteProduct);

module.exports = router;