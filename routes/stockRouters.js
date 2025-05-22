const express = require('express');
const router = express.Router();
const Stock = require('../models/stock');

// POST
router.post('/addStock', async (req, res) => {
    try {
        const stock = new Stock(req.body);
        const saved = await stock.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET
router.get('/getStock/:id', async (req, res) => {
    try {
        const stock = await Stock.findById(req.params.id);
        if (!stock) return res.status(404).json({ message: 'Stock not found' });
        res.json(stock);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// GET - Get all Stock items //{http://localhost:5001/api/allStock}
router.get("/allStock", async (req, res) => {
    try {
        const stocks = await Stock.find(); // Fetches all documents from Stock collection
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stocks', details: error.message });
    }
});


module.exports = router;
