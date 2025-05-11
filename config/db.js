// // config/db.js
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load .env variables

// const connectDB = async () => {
//     try {
//         const uri = process.env.MONGO_URI;
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
