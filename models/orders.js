// models/Orders.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: String,
    category: String,
    price: Number,
    quantity: Number,
    status: String
});

module.exports = mongoose.model('Orders', orderSchema);
