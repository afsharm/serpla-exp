require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        throw error;
    }
};

module.exports = { connectToDatabase };