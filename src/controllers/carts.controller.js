import { cartsService } from "../services/index.js";


const addProduct = async (req,res) => {
    const {pid,cid} = req.body
    if(!pid, !cid) return res.status(400).send({status:'error',error:'Incomplete Data'})
    let userCart= await cartsService.getCartById(cid);
    let cart = [...userCart.products, {product:pid, quantity: 1}]
    let result = await cartsService.update(cid,cart)
    res.send({status:'success',payload:result})
}


export default {
    addProduct
}