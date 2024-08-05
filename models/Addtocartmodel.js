const mongoose=require('mongoose');
const addtocart=mongoose.Schema({
    productId:{
        ref:'product',
        type:String
    },
    quantity:Number,
    userId:String,
},{
    timestamps:true
})
const addtocartmodel=mongoose.model("addtocart",addtocart)
module.exports=addtocartmodel;