import { ROUTES } from '../constants/routes.js'
import { productsService } from '../services/index.js';

const home= async(req,res)=>{
    const routes = ROUTES[req.user.Role];
    const products=await productsService.getProducts();
    console.log(products),
    res.render('home',{
        user:req.user,
        routes:routes,
        products
    })
}

const register=(req,res)=>{
    res.render('register')
}

const login= (req,res)=>{
    res.render('login')
}

const newProduct=(req,res)=>{
    res.render('newProducts')
}

export default {
    home,
    register,
    login,
    newProduct
}