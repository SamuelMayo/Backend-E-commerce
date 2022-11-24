import { productsService } from "../services/index.js";

const createProduct=async (req,res)=>{
    if(!req.file) return res.status(500).send({status:'error', error:'error al cargar imagen'})
    const {Name,Description,Price,Stock}= req.body;
    if( !Name || !Description || !Price || !Stock ){ return res.status(400).send({status:'error', error:'valores Incompletos'})}
    const product ={
        Name,
        Description,
        Price,
        Stock,
        Image:`${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
    }
    let result = await productsService.saveProduct(product);
    res.send({status:'success',payload:result})
}


const getAllProducts= async (req,res)=>{
    let products = await productsService.getProducts();
    res.send({status:'success',payload:products})
}

const getProductById= async (req,res)=>{
    const { pid } = req.params;
    let product = await productsService.getProductById(pid)
    if(!product) return res.status(400).send({status:'Error',error:'product not found'});
    res.send({status:'success',payload:product})
}


export default {
    createProduct,
    getProductById,
    getAllProducts
}