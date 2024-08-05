const productmodel = require("../../models/Productmodel")

const searchproduct=async(req,res)=>{
    try{
        const query=req.query.q
        const regex=new RegExp(query,'i','g')
        const product=await productmodel.find({
            "$or":[
                {
                    productname:regex
                },{
                    category:regex
                }
            ]
        })

        res.json({
            data:product,
            message:'Search',
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

module.exports=searchproduct