const express=require("express");
const router=express.Router();
const userModel=require('../models/users');
router.post("/",async(req,res)=>{
    const newUser=new userModel(req.body);
    try
    {
            const savedUser=await newUser.save();
            res.send(savedUser);
            console.log(savedUser);
    }
    catch(error)
    {
        res.send(error)
        console.log(error);
    }
});
router.get("/",async(req,res)=>{
    try
    {
            const userList=await userModel.find();
            res.status(200).json(userList);

    }
    catch{
        res.send(500).json(error);

    }
})

module.exports=router;