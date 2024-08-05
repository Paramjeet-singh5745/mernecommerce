const addtocartmodel = require("../../models/Addtocartmodel");

const addtocartviewproduct=async(req,res)=>{
    try{
        const currentuser=req.userId;
        const allproduct=await addtocartmodel.find({
            userId:currentuser
        }).populate("productId")
        res.json({
            data:allproduct,
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
module.exports=addtocartviewproduct