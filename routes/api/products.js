const express = require('express');
const router = express.Router();
const { findProductByTypeandColour } = require('../../mongoDB');

// @route GET api/products
router.get('/', async (req, res) => {
    const products = await findProductByTypeandColour(req.query);
    res.json(products);
});

module.exports = router;