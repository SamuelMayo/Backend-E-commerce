

export default class userService {
    constructor(dao){
        this.dao=dao;
    }

    getUsers=()=>{
        return this.dao.getAll();
    }

    getUserById=(id)=>{
        return this.dao.getByID(id);
    }

    getUserByEmail=(email)=>{
        return this.dao.getByEmail(email);
    }

    saveUser=(user)=>{
        return this.dao.save(user);
    }
}