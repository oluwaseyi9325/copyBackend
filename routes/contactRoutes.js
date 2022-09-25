const express=require("express");
const { contactController } = require("../controller/contactController");
const contactRoutes=express.Router();


contactRoutes.post("/",contactController)






module.exports={contactRoutes}