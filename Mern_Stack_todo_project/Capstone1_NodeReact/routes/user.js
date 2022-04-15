const express=require("express");
const router=express.Router();

const mongoose =require("mongoose");

const UserSchema=require("../models/User");

const UserService=require("../services/UserService");


//express-jwt authorization-------------
const auth=require("./auth");

//injecting auth middleware globally but we should not before login------------
//router.use(auth);

//const userServiceObj=new UserService();


// router.get("/",(req,res)=>{

//     res.send("User Root page");
// })

router.get("/",auth.required, async (req,res)=>{

    const userServiceObj=new UserService();
    let users=await userServiceObj.getUser();

    res.send(users);

    
   // res.send("User listing Page")
})

/*

router.get("/create",async(req,res)=>{

    let result=await userServiceObj.createUser({
        fullname:"Yogesh Sanap",
        email:"yogesh@google.com",
        gender:"Male",
        phone:1234567898,
        salt:"",
        hash:""
    });

    res.send(result);
}) */

router.post("/",auth.required,async(req,res)=>{

    //console.log(req.body)

    const userServiceObj=new UserService();
    let result=await userServiceObj.setUser(req.body);

    res.send(result);
});

router.delete("/:id",auth.required, async(req,res)=>{

    const userServiceObj=new UserService();
    const result= await userServiceObj.removeUser(req.params.id);

    res.send(result)
})

// router.delete("/:id", async(req,res)=>{

//     const result= await userServiceObj.deleteUser(req.params.id);

//     res.send(result)
// })

router.post("/login", async(req,res)=>{

    const userServiceObj=new UserService();
    let loginResult= await userServiceObj.loginUser(req.body.email,req.body.password);
    res.send(loginResult);
})



// router.get("/add",(req,res)=>{

//     res.send("User Add Page..");
// })




module.exports=router;