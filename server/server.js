// require("dotenv").config();
// const express=require('express');
// const cors=require("cors");
// const app=express();
// const PORT=process.env.PORT ||5000;
// const dbConnect=require("./db/mongodb");
// const { route } = require("./routes/userRoutes");

// app.use(express.json());
// app.use(cors());

// dbConnect()
// app.get('/',(req,res)=>{
//     res.send("Api working");
// })

// app.use('/api/user',route)

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
    
// })


require("dotenv").config();
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const dbConnect = require("./db/mongodb");
const userRoutes = require("./routes/userRoutes");

// ✅ Use raw body ONLY for webhook route
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }));

// ✅ Use express.json() for all other routes
app.use(express.json());
app.use(cors());

// ✅ Connect DB
dbConnect();

app.get('/', (req, res) => {
    res.send("API working");
});

// ✅ Use routes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
