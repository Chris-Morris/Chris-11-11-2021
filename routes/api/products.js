const express =require('express');
const router = express.Router();
const {findProductById} = require('../../mongoDB');

// @route GET api/products
// @desc Get All Products
router.get('/:id', async (req, res) => {
    const product = await findProductById(req.params.id);
    res.json(product);
});

module.exports = router;