import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product : TProduct)=>{
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductFromDB = async (filter = {})=>{
    const result = await ProductModel.find(filter);
    return result;
}

const getOneProductFromDB = async (id : string)=>{
    const result = await ProductModel.findById(id);
    return result;
}

const updateProduct = async (id: string, updateData : Partial<TProduct>)=>{
    const result = await ProductModel.findByIdAndUpdate(id, updateData);
    return result;
}

const deleteProduct = async (id: string)=>{
    const result = await ProductModel.findByIdAndDelete(id);
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getOneProductFromDB,
    updateProduct,
    deleteProduct,
}