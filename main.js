const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Use async/await for mongoose connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/inveSystem', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error Connecting to DB:', error);
        process.exit(1); // Exit process if DB connection fails
    }
};
connectDB();

//Define schema properly using `new mongoose.Schema`
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: Number
});

// Model name should start with uppercase
const Customer = mongoose.model('customer', userSchema);

//-------------------------------- POST request --------------------------
app.post("/addCustomer", async (req, res) => {
    try {
        console.log(req.body);
        const userdata = new Customer({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id
        });

        const result = await userdata.save();
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error saving customer', details: error.message });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

//--------------------- PUT request -------------------------------------
app.put("/updateCustomer/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = userdata;
        const result = await Customer.updateOne({ id: id }, { $set: updatedData });
        res.status(200).json({result:'Customer updated successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Error updating customer', details: error.message });
    }
});




