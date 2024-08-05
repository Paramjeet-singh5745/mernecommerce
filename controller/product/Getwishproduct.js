const productmodel = require("../../models/Productmodel")

const getproductwishitem=async(req,res)=>{
    try{
        const {category}=req?.body || req?.query
        const  product=await productmodel.find({category})
        res.json({
            data:product,
            message:"Product",
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
module.exports=getproductwishitem;