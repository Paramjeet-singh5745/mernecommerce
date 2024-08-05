const addtocartmodel = require("../../models/Addtocartmodel");

const deleteaddtocart=async(req,res)=>{
    try{
        const currentuserId=req.userId;
        const addtocartId=req.body._id;
        const deleteproduct=await addtocartmodel.deleteOne({_id:addtocartId})
        res.json({
            data:deleteproduct,
            message:"Product deleted from cart",
            success:true,
            error:false
        })
    }catch(e){
        res.json({
            message:e?.message || e,
            error:true,
            success:false
        })
    }
}

module.exports=deleteaddtocart;