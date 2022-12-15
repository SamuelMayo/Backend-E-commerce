import productsModel from "./models/products.dao.js";
import salesModel from "./models/sales.dao.js";

export default class SalesDao{
    getAll=()=>{
        return salesModel.find();    
    }

    getByID=(id)=>{
        return salesModel.findOne({_id:id})
    }

    save=(newSale)=>{
        return salesModel.create(newSale)
    }
}