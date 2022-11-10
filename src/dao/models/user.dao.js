import mongoose from "mongoose";


const collection = 'users';

const schema =new mongoose.Schema({
    First_name: String,
    Last_name: String,
    Email: String,
    Password: String,
    Age: Number,
    Role:{
        type: String,
        enum:['user', 'admin'],
        default: 'user'
    },
    Phone: String,
    Cart:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'carts'
    }
})

const userModel = mongoose.model(collection,schema)

export default userModel;