const productmodel = require("../../models/Productmodel");

const filterproduct=async(req,res)=>{
    try{
        const categorylist=req?.body?.category;
        const prouduct=await productmodel.find({
                category:{
                    "$in":categorylist
                },
            
        })

        res.json({
            message:'product',
            data:prouduct,
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
module.exports=filterproduct;