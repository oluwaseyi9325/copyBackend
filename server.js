const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.port;
const cors=require("cors");
const mongoose=require("mongoose");
const { contactRoutes } = require("./routes/contactRoutes");
const { authUser } = require("./routes/user/authUserIn");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const URI=process.env.URI;

mongoose.connect(URI,(err,res)=>{
    if (err) {
        console.log("cant connect to mongoose///")
    }
})



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.get("/hey",(req,res)=>{
    // console.log("good")
    res.send(['good'])
})

app.use("/contact",contactRoutes);
app.use("/authUserIn",authUser)

app.listen(PORT,(req,res)=>{
    console.log("connected...",PORT)
    
})


