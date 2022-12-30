import userModel from "./models/user.dao.js";


export default class UsersDao {

    getAll = () => {
        return userModel.find().lean();
    }

    getByID = (id) => {
        return userModel.findOne({ _id: id }).lean();
    }

    getByEmail = (Email => {
        return userModel.findOne({ Email }).lean();
    })

    save = (user) => {
        return userModel.create(user);
    }
}