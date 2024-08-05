const userModel = require("../../models/Usermodal");


async function Alluser(req,res){
    try{
        const alluser=await userModel.find();
        res.json({
            message:"All user",
            data:alluser,
            success:true,
            error:false
        })
    }catch(e){
        res.status(400).json({
            message:e.message || e,
            error:true,
            success:false
        })
    }
}
module.exports=Alluser