import {UserDTOPresenter} from "../DTOs/usersDTO.js";
import { usersService } from "../services/index.js";


const getUsers = async (req, res) => {
    let result = await usersService.getUsers();
    let users = result.map(u => new UserDTOPresenter(u));
    res.send({ status: 'success', payload: users });
}

const getUserById = async (req, res) => {
    const { uid } = req.params;
    let result = await usersService.getUserById(uid);
    if (!result) return res.status(404).send({ status: 'error', error: 'User not found' })
    let user = new UserDTOPresenter(result);
    res.send({ status: 'success', payload: user })
}


export default {
    getUsers,
    getUserById,
}