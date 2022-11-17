import { usersService, cartsService } from "../services/index.js";
import { createHash, isValidPassword } from "../utils.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { UserDTOInsert } from "../DTOs/usersDTO.js";

const register= async (req,res)=>{
    const{First_name,Last_name,Email,Password,Age,Phone} = req.body;
    if(!First_name || !Last_name || !Email || !Password || !Phone) return res.status(400).send({status:'error',error:'incomplete data'})
    let exist = await usersService.getUserByEmail(Email);
    if(exist) return res.status(400).send({status:'error', error:'user already exist'})
    const cart=await cartsService.createCart();
    const hashedPassword= await createHash(Password);
    const user ={
        First_name,
        Last_name,
        Email,
        Password:hashedPassword,
        Age,
        Phone,
        Cart:cart._id
    }
    const userDTO= new UserDTOInsert(user)
    const result = await usersService.saveUser(userDTO);
    res.send({status:'success',payload:result});
}


const login= async (req,res)=>{
    const {Email,Password}=req.body;
    if(!Email || !Password) return res.status(400).send({status:'error',error:'incomplete data'});
    if(Email===config.session.ADMIN_EMAIL && Password===config.session.ADMIN_PWD){
        const sessionAdminUser={
            name:"adminVendelotuyo",
            Role:"admin",
            id:0
        }
        const token= jwt.sign(sessionAdminUser,config.jwt.SECRET,{expiresIn:"1h"});
        return res.cookie(config.jwt.COOKIE, token, {maxAge:3600000}).send({status:'success',message:'logueado como admin'});
    };
    let user = await usersService.getUserByEmail(Email);
    if(!user) return res.status(400).send({status:'error', error:'usuario no encontrado'})
    const passwordValidation = await isValidPassword(user,Password);
    if(!passwordValidation) return res.status(400).send({status:'error', error:'contraseña incorrecta'});
    const tokenUser={
        Email:user.Email,
        Role:user.Role,
        Name:`${user.First_name} ${user.Last_name}`,
        Id:user._id,
        Cart:user.Cart
    }
    const token=jwt.sign(tokenUser,config.jwt.SECRET,{expiresIn:'2h'});
    res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:'success',message:'logueado'})
}


export default {
    register,
    login
}