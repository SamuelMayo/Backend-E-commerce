import { ROUTES } from '../constants/routes.js'
import { cartsService, productsService, usersService } from '../services/index.js';

const home = async (req, res) => {
    const routes = ROUTES[req.user.Role];
    const products = await productsService.getProducts();
    if(req.user.Role == "user"){
    let ADMIN = false;
    res.render('home', {
        user: req.user,
        routes: routes,
        products,
        ADMIN
    })}else{
        let ADMIN = true;
        res.render('home', {
            user: req.user,
            routes: routes,
            products,
            ADMIN
        })
    }
}

const cart = async (req, res) => {
    const cartId = req.user.Cart;
    const cart = await cartsService.getPopulatedCart(cartId);
    const { products } = cart
    res.render('cart', {
        products,
        user: req.user
    })
}


const register = (req, res) => {
    res.render('register')
}

const login = (req, res) => {
    res.render('login')
}

const newProduct = (req, res) => {
    res.render('newProducts')
}

const profile = async (req, res) => {
    let uid = req.user.Id
    let user = await usersService.getUserById(uid)
    res.render('profile', {
        user
    })
}

const usersPanel = async (req, res) => {
    let users = await usersService.getUsers();
    res.render('usersPanel',{
        users,
    })
}

export default {
    home,
    register,
    login,
    newProduct,
    cart,
    profile,
    usersPanel
}