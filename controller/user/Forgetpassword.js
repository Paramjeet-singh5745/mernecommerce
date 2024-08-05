const userModel = require("../../models/Usermodal")

const forgetpassword=async(req,res)=>{
    try{

        const id=req.userId
        const userpass=await userModel.findById(id)
        if(userpass.email){
            userpass.password = newPassword;
            await userpass.save();   
        }
        else{
            res.json({
                message:"Invalied email",
                success:false,
                error:true
            })
        }
        res.json({
            data:userpass,
            message:"valied email",
            success:true,
            error:false
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}
module.exports=forgetpassword