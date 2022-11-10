import userModel from "./models/user.dao.js";


export default class UsersDao {

    getAll = () => {
        return userModel.find();
    }

    getByID = (id) => {
        return userModel.findOne({ _id: id });
    }

    getByEmail = (Email => {
        return userModel.findOne({ Email });
    })

    save = (user) => {
        return userModel.create(user);
    }
}