const express = require('express');
const router = express.Router();
const Orders = require('../models/orders');
 
//POST
router.post('/addOrder', async (req , res ) => {
    try {
        const orders = new Orders(req.body);
        const saved = await orders.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET orders by product name
router.get('/getOrder/:product', async (req, res) => {
    try {
        const product = req.params.product;
        console.log('Searching for:', product);

        const ordersList = await Orders.find({
            product: { $regex: new RegExp(product, 'i') }
        });

        console.log('Found orders:', ordersList);

        if (!ordersList || ordersList.length === 0) {
            return res.status(404).json({ message: 'No orders found for this product' });
        }

        res.status(200).json(ordersList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;