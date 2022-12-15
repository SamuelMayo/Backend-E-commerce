export default class saleService{
    constructor (dao){
        this.dao = dao
    }

    getSales=async()=>{
        let result = await this.dao.getAll();
        return result.map(product=>product.toObject());
    }

    getSaleById=async(id)=>{
        let result = await this.dao.getById(id);
        return result.toObject();
    }

    saveSale=async(sale)=>{
        return this.dao.save(sale);
    }

}