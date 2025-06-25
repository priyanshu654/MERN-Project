require("dotenv").config();
const express=require('express');
const cors=require("cors");
const app=express();
const PORT=process.env.PORT;
const dbConnect=require("./db/mongodb");

app.use(express.json());
app.use(cors());

dbConnect()
app.get('/',(req,res)=>{
    res.send("Api working");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})