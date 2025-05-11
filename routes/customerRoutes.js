// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// POST
router.post("/addCustomer", async (req, res) => {
    try {
        const userdata = new Customer(req.body);
        const result = await userdata.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error saving customer', details: error.message });
    }
});

// PUT
router.put("/updateCustomer/:id", async (req, res) => {
    try {
        const result = await Customer.updateOne({ id: req.params.id }, { $set: req.body });
        res.status(200).json({ result: 'Customer updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating customer', details: error.message });
    }
});

// GET
router.get("/getCustomer/:id", async (req, res) => {
    try {
        const result = await Customer.findOne({ id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching customer', details: error.message });
    }
});

// DELETE
router.delete("/deleteCustomer/:id", async (req, res) => {
    try {
        const result = await Customer.deleteOne({ id: req.params.id });
        res.status(200).json({ result: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting customer', details: error.message });
    }
});

module.exports = router;
