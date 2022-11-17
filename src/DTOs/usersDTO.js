export class UserDTOPresenter{
    constructor(user){
        this.id= user._id,
        this.full_name=`${user.First_name} ${user.Last_name}`,
        this.email=user.Email,
        this.phone=user.Phone,
        this.cart=user.Cart,
        this.role=user.Role||'user'
    }
}

export class UserDTOInsert{
    constructor(user){
        this.First_name=user.First_name,
        this.Last_name=user.Last_name,
        this.Email=user.Email,
        this.Password=user.Password,
        this.Role=user.Role,
        this.Phone=parseInt(user.Phone),
        this.Cart=user.Cart
    }
}
