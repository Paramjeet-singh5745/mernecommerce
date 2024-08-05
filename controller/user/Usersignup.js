const userModel=require("../../models/Usermodal");
const bcrypt=require('bcrypt');
async function UserSignup(req,res){
    try{
        const {name,password,email}=req.body;

        const user=await userModel.findOne({email})
        if(user){
            throw new Error("Already user exit")

        }
        if(!email){
            throw new Error("Please Provide email")
        }
        if(!password){
            throw new Error("Please Provide password")
        }
        if(!name){
            throw new Error("Please Provide name")
        }
        const salt=bcrypt.genSaltSync(10);
        const hashpassword=await bcrypt.hashSync(password,salt)
        if(!hashpassword){
            throw new Error("Something is wrong")
        }
        const payload={
            ...req.body,
            role:"General", 
            password:hashpassword
        }
        const userdata=new userModel(payload)
        const saveuser=await userdata.save();
        res.status(201).json({
            data:saveuser,
            success:true,
            error:false,
            message:"User-created successfully"
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}

module.exports=UserSignup;