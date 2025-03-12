import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product : TProduct)=>{
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductFromDB = async ()=>{
    const result = await ProductModel.find();
    return result;
}

const getOneProductFromDB = async (id : string)=>{
    const result = await ProductModel.findById(id);
    return result;
}

const updateProduct = async (id: string)=>{
    const result = await ProductModel.findByIdAndUpdate(id);
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getOneProductFromDB,
    updateProduct,
}