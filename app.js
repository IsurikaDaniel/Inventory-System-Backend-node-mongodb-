// app.js
const express = require('express');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');
const stockRoutes = require('./routes/stockRouters');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes
app.use('/', customerRoutes);
app.use('/', stockRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
