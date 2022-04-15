const express=require("express");
const app=express();

const cors=require("cors");
const helmet=require("helmet");
const mongoose = require("mongoose");
const { json } = require("body-parser");

app.use(cors());
app.use(helmet())
 //
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//
app.use("/user",require("./routes/user"));





app.get("/",(req,res)=>{

    res.send("Welcome to the Capstone Project...")
})



app.listen(3000,(e)=>{

    console.log("Server Started...")

    mongoose.connect("mongodb://localhost/capstone").then((result)=>{
        console.log("Database Connected....");

    }).catch((e)=>{
        console.log("Error Connecting to the database..");
        console.log(e);
    })
})