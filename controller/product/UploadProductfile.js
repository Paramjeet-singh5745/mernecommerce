const Uploadproductpermission = require("../../helper/Permission");
const productmodel = require("../../models/Productmodel")
async function UploadProductController(req,res){
    try{
        const sessionuserId=req.userId;
        if(!Uploadproductpermission(sessionuserId)){
            throw new Error("Permission denied")
        }
        const uploadproduct=new productmodel(req.body)
        const saveProduct=await uploadproduct.save()
        res.status(201).json({
            message:'Product Upload Successfully',
            error:false,
            success:true,   
            data:saveProduct
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}

module.exports=UploadProductController;