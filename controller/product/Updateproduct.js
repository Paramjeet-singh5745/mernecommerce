const Uploadproductpermission = require("../../helper/Permission");
const productmodel = require("../../models/Productmodel");

async function updateproductdetail(req,res){
    try{
        if(!Uploadproductpermission(req.userId)){
            throw new Error("Permission denied") 
        }
        const {_id,...resBody}=req.body;
        const updateProduct=await productmodel.findByIdAndUpdate(_id,resBody)
        res.json({
            message:"Product updated successfully",
            data:updateProduct,
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

module.exports=updateproductdetail;