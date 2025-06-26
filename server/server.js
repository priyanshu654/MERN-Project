require("dotenv").config();
const express=require('express');
const cors=require("cors");
const app=express();
const PORT=process.env.PORT ||5000;
const dbConnect=require("./db/mongodb");
const { route } = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

dbConnect()
app.get('/',(req,res)=>{
    res.send("Api working");
})

app.use('/api/user',route)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})