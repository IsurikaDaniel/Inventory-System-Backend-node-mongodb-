const express = require('express');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');
const stockRoutes = require('./routes/stockRouters');
const cors = require('cors');

const app = express(); 

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); 
app.use(express.json());

// Register routes
app.use('/api', stockRoutes); 
app.use('/', customerRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
