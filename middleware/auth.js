const jwt=require('jsonwebtoken')
async function authtoken(req,res,next){
    try{
        const token=req.cookies?.token;
        if(!token){
            return res.status(200).json({
                message:"User not login",
                error:true,
                success:false   
            })
        }
        jwt.verify(token,process.env.TOKEN_KEY, function(err, decoded) {
            if(err){
                console.log("auth error",err)
            }
            req.userId=decoded?._id
            next()
          });
    }catch(e){
        res.status(400).json({
            message:e.message || e,
            data:[],
            error:true,
            success:false,
        })        
    }
}
module.exports=authtoken