const mongoose=require('mongoose');
const productSchemas=mongoose.Schema({
    productname:String,
    brandname:String,
    category:String,
    productimage:[],
    description:String,
    price:Number,
    selling:Number,
},{
    timestamps:true
})
const productmodel=mongoose.model("product",productSchemas)
module.exports=productmodel;