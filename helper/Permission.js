const userModel = require("../models/Usermodal")

const Uploadproductpermission=async(userId)=>{
    const user=await userModel.findById(userId);
    if(user.role === 'ADMIN'){
        return true
    }
    return false
}
module.exports=Uploadproductpermission;