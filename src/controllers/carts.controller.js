import { cartsService } from "../services/index.js";
import { usersService } from "../services/index.js";
import { salesService } from "../services/index.js";
import MailingService from "../services/mailer.js";

const addProduct = async (req, res) => {
    const { pid, cid } = req.body
    if (!pid, !cid) return res.status(400).send({ status: 'error', error: 'Incomplete Data' })
    let userCart = await cartsService.getCartById(cid);
    let cart = [...userCart.products, { product: pid, quantity: 1 }]
    let result = await cartsService.update(cid, cart)
    res.send({ status: 'success', payload: result })
}

const deleteProduct = async (req, res) => {
    const { pid , cid } = req.body
    if (!pid, !cid) return res.status(400).send({ status: 'error', error: 'Incomplete Data' });
    let cart = await cartsService.getCartById(cid);
    let newCart = cart.products.filter(prod=> prod._id != pid);
    let result = await cartsService.update(cid,newCart)
    res.send({status:'success', payload:result})
}

const checkout = async (req,res) =>{
    const {uid} = req.body
    if(!uid)return res.status(400).send({ status: 'error', error: 'Incomplete Data' });
    let userInfo = await usersService.getUserById(uid);
    let cartProducts = await cartsService.getPopulatedCart(userInfo.Cart);
    let sale ={
        User:userInfo,
        Products:cartProducts.products
    }
    let result = await salesService.saveSale(sale)
    const mailer = new MailingService();
    let sendEmail= await mailer.sendMail({
        from:'VentasVendeLoTuyo',
        to:userInfo.Email,
        subject:'Tu compra fue realizada con exito',
        html:`
            <h1>Gracias por su compra</h1>
            <h3>El Id de su compra es ${result._id}</h3>
            <h5>Los productos comprados son:</h5>
            <ul>
            ${cartProducts.products.map(prod => {
                return `<li>${prod.product.Name}</li>`
            })}
            </ul>
        `
    })
    let arr = []
    let cleanCart = await cartsService.update(userInfo.Cart, arr)
    res.send({status:"success",payload:result})
}


export default {
    addProduct,
    deleteProduct,
    checkout
}