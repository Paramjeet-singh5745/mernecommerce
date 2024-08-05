const addtocartmodel = require("../../models/Addtocartmodel")

const countaddtocart=async(req,res)=>{
    try{
        const userId=req.userId
        const count=await addtocartmodel.countDocuments({
            userId:userId
        })
        res.json({
            data:{
                count:count
            },
            message:"ok",
            error:false,
            success:true
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}

module.exports=countaddtocart;