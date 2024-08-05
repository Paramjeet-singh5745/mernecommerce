const usermodel=require("../../models/Usermodal")
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const usersignin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email){
            throw new Error("Please Provide email")
        }
        if(!password){
            throw new Error("Please Provide password")
        }
        const user=await usermodel.findOne({email})
        console.log("email:",user.email)
        
        if(!user.email){
            throw new Error("User not found!!")
        }
        const checkpassword=await bcrypt.compare(password,user.password)
        console.log(checkpassword)
        console.log("password",password);
        console.log("Hash password",user.password)
        if(checkpassword){
            const datatoken={
                _id:user._id,
                email:user.email
            }
            
            const token=await jwt.sign(datatoken,process.env.TOKEN_KEY, { expiresIn:60*60*8 });
            const tokenoperation={
                httpOnly:true,
                secure:true,
            }
           res.cookie('token', token,tokenoperation).json({
                message:"Login successfully",
                data:token,
                success:true,
                error:false
            })
        }
        else{
            throw new Error("Password is not correct")
        }
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}
module.exports=usersignin;