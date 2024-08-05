const addtocartmodel = require("../../models/Addtocartmodel");

const addtocartcontroller=async(req,res)=>{
    try{
        const {productId}=req?.body
        const  currentuser=req.userId;
        const isproductavailable=await addtocartmodel.findOne({productId})
        if(isproductavailable){
            return res.json({
                message:"Already exit in the add to cart",
                success:false,
                error:true
            })
        }
        const payload={
            productId:productId,
            quantity:1,
            userId:currentuser
        }
        const newcart=new addtocartmodel(payload)
        const saveproduct=await newcart.save();
        res.json({
            message:"Product added successfully",
            data:saveproduct,
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

module.exports=addtocartcontroller;