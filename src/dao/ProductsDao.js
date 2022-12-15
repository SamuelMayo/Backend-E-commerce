import productsModel from "./models/products.dao.js";

export default class ProductsDao{

    getAll=()=>{
        return productsModel.find();    
    }

    getByID=(id)=>{
        return productsModel.findOne({_id:id}).lean()
    }

    save=(newProduct)=>{
        return productsModel.create(newProduct)
    }

    update=(id,product)=>{
        return productsModel.findByIdAndUpdate(id,{$set:product});
    }
}
