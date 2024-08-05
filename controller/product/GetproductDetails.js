const productmodel = require("../../models/Productmodel");
const getproductdetails=async(req,res)=>{
    try{
        const { productID }=req.body;
        const product=await productmodel.findById(productID)
        console.log("Product id",product)
        res.json({
            data:product,
            message:"Ok",
            success:true,
            error:false,
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}

module.exports=getproductdetails;



