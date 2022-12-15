import mongoose from "mongoose";

const collection = 'sales';

const schema = new mongoose.Schema({
    User:Object,
    Products:Array
})


const salesModel = mongoose.model(collection,schema);
export default salesModel;