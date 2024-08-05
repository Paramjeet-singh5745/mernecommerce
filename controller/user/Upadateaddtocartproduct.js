const addtocartmodel = require("../../models/Addtocartmodel");

const updateaddtocartproduct=async(req,res)=>{
    try{
        const currentuserId=req.userId;
        const addtocartId=req.body._id
        const qty=req.body.quantity;
        const updateproduct=await addtocartmodel.updateOne({_id:addtocartId},{
           ...(qty && {quantity:qty})
        })
        res.json({
            message:"Product Updated",
            data:updateproduct,
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

module.exports=updateaddtocartproduct