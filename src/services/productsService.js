export default class productService{
    constructor (dao){
        this.dao = dao
    }

    getProducts=async()=>{
        let result = await this.dao.getAll();
        return result.map(product=>product.toObject());
    }

    getProductById=async(id)=>{
        let result = await this.dao.getById(id);
        return result.toObject();
    }

    saveProduct=async(product)=>{
        return this.dao.save(product);
    }

    updateProduct=(id,product)=>{
        return this.dao.update(id,product);
    }

    deleteProduct=(id)=>{
        return this.dao.delete(id);
    }

}