import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const publicValidation = (req,res,next)=>{
    try{
        const token = req.cookies[config.jwt.COOKIE];
        if(token){
            return res.redirect('/');
        }else{
            next();
        } 
    }catch(err){
        console.log(err);
        next()
    }
}


export const privateValidation=(req,res,next)=>{
    try{
        const token = req.cookies[config.jwt.COOKIE];
        if(!token) return res.redirect('/login')
        const user = jwt.verify(token,config.jwt.SECRET);
        req.user=user
        next()
    }catch(err){
        if(err.expiredAt){
            res.redirect('/login')
        }
    }
}


export const executePolicies = (policies)=>{
    return (req,res,next) =>{
        if(policies[0].toUpperCase()==="PUBLIC") return next();
        if(policies.includes(req.user.Role.toUpperCase())) return next();
        res.redirect('/');
    }
}