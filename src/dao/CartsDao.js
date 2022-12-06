import cartsModel from "./models/cart.dao.js";


export default class CartsDao{

    getById=(id)=>{
        return cartsModel.findOne({_id:id}).lean();
    }

    getByIdAndPopulate=(id)=>{
        return cartsModel.findOne({_id:id}).lean().populate('products.product')
    }

    save=()=>{
        return cartsModel.create({products:[]})
    }

    update=(cid,cart)=>{
        return cartsModel.findByIdAndUpdate(cid,{$set:{products:cart}});
    }
}