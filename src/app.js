const express=require("express");
const mongoose=require('mongoose');
const app=express();
const userRoute=require('./routes/users');
const port=process.env.PORT || 8000;

mongoose.connect('mongodb+srv://sahil:sahil@cluster0.gedx4a7.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log(e);
});

app.use(express.json());
app.use("/user",userRoute);
// app.get("/",(req,res)=>{
//     res.send("hello from get side");
// })
app.post("/",(req,res)=>{
    res.send("hello from app.js")
});
    app.listen(port,()=>{
        console.log("server is running");
    });
