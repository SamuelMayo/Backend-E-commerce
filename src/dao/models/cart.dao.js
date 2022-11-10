import mongoose from "mongoose";

const collection = 'carts';

const schema= new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.SchemaTypes.ObjectId,
                ref: 'products'
            },
            quuantity:{
                type:Number,
                default:1
            }
        }
    ]
})

const cartsModel=mongoose.model(collection,schema)
export default cartsModel;