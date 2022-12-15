import { ROUTES } from '../constants/routes.js'
import { cartsService, productsService } from '../services/index.js';

const home = async (req, res) => {
    const routes = ROUTES[req.user.Role];
    const products = await productsService.getProducts();
    res.render('home', {
        user: req.user,
        routes: routes,
        products
    })
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

export default {
    home,
    register,
    login,
    newProduct,
    cart
}