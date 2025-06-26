const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("dbConnection successful");
    } catch (error) {
        console.log("Error while connecting database:", error.message);
    }
};

module.exports = dbConnect;
