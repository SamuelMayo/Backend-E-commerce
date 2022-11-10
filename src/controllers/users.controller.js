import { usersService } from "../services/index.js";


const getUsers = async (req, res) => {
    let users = await usersService.getUsers();
    res.send({status:'success', payload:users});
}

const getUserById = async(req,res)=>{
    const {uid} = req.params;
    let user= await usersService.getUserById(uid);
    if(!user) return res.status(404).send({status:'error',error:'User not found'})
    res.send({status:'success',payload:user})
}


export default {
    getUsers,
    getUserById,
}