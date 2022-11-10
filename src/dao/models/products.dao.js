import mongoose from "mongoose";

const collection = 'products';

const schema = new mongoose.Schema({
    Name:String,
    Description:String,
    Price:Number,
    Stock:Number,
    Image:String
})


const productsModel = mongoose.model(collection,schema);
export default productsModel;