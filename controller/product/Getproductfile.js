const productmodel = require("../../models/Productmodel")

const getproductcontroller=async(req,res)=>{
    try{
        const allProduct = await productmodel.find().sort({ createdAt : -1 })

        res.json({
            message:"All product",
            success:true,
            error:false,
            data:allProduct
        })

    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}
module.exports=getproductcontroller;