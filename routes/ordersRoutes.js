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

module.exports = router;