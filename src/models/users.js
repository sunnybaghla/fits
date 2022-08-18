const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    }
});
const Client=new mongoose.model('Client',userSchema);
module.exports=Client;