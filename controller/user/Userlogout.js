async function Userlogout(req,res){
    try{
        res.clearCookie("token")
        res.json({
            message:"Logout Successfully",
            error:false,
            success:true,
            data:[]
        })
    }catch(e){
        res.json({
            message:e.message || e,
            error:true,
            success:false,
        })
    }
}

module.exports=Userlogout;