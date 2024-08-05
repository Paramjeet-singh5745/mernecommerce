const productmodel=require('../../models/Productmodel')
const getcategoryproduct=async(req,res)=>{
    try{
        const productcategory=await productmodel.distinct("category")
        const productBycategory=[];
        for(const category of productcategory){
            const product=await productmodel.findOne({category});
            if(product){
                productBycategory.push(product)
            }
        }
        res.json({
            message:'Category products',
            data:productBycategory,
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
module.exports=getcategoryproduct;