import userModel from "../../DB/model/user.model.js";
import jwt from "jsonwebtoken";
export const auth=(accessRoles=[])=>{
    return async (req,res,next)=>{
        const {authorization}=req.headers;
        if(!authorization?.startsWith(process.env.BEARERKEY)){
            res.status(400).json({message:"Invalid authorization"});        
    }
    const token=authorization.split(process.env.BEARERKEY)[1];
    const decoded=jwt.verify(token,process.env.LOGINSECRET);
    if(!decoded){
        res.status(400).json({message:'Token is invalid or invalid authorization'});
    }
    const user=await userModel.findById(decoded.id).select("userName role");
    if(!user){
        res.status(404).json({message:"not registerd user" });
    }
    if(!accessRoles.includes(user.role)){
        res.status(403).json({message:"not auth user"});
    }
   req.user=user;
    next();
}
}