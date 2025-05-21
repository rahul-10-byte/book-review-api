const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    });
};

module.exports = connectDB;
