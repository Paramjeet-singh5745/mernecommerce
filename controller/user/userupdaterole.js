const userModel = require("../../models/Usermodal");
async function updateuser(req,res){
    const sessionuserid=req.userId;
    try{
        const {userId,name,email,role}=req.body;
        const payload={
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role})
        }
        const upuser=await userModel.findByIdAndUpdate(userId,payload)
        const user=await userModel.findById(sessionuserid)
        res.json({
            data:upuser,
            message:"User updated",
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

module.exports=updateuser;