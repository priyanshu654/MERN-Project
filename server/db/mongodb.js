const mongoose=require('mongoose');
require('dotenv').config();

dbConnect=async()=>{
    try {
        const response=await mongoose.connect(process.env.DB_URL)
        .then(console.log("dbConnection successful"))
    } catch (error) {
        console.log("error while connecting database");
    }
}

module.exports=dbConnect;