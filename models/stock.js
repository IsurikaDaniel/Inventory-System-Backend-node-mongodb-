// models/Stock.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: Number,
    product: String,
    category: String,
    sales : String,
    instruction : String,
    items : Number,
    status : String
   
});

module.exports = mongoose.model('Stock', userSchema);
