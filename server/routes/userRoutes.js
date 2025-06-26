const express=require("express");
const clerkWebhooks = require("../controllers/userController");

const route=express.Router();

route.post("/webhooks",clerkWebhooks)

module.exports=route