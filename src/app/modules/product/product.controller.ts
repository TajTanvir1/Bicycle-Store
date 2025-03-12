import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req:Request, res: Response)=>{
    try {
        const product = req.body;

    const result = await ProductServices.createProductIntoDB(product);

    res.status(200).json({
        message: "Product is created successfully",
        success: true,
        data: result
    })
    } catch (error) {
        console.log(error);
    }
}

const getAllProduct = async (req: Request, res:Response)=>{
    try {
        const result = await ProductServices.getAllProductFromDB();
        res.status(200).json({
            message: "All product get successfully",
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getOneProductFromDB = async (req:Request, res:Response)=>{
    try {
        const {productId} = req.params;
        const result = await ProductServices.getOneProductFromDB(productId);
        res.status(200).json({
            message: "Product get successfully",
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req: Request, res:Response)=>{
    try {
        const {productId} = req.params;
        const updateData = req.body;
        const result = await ProductServices.updateProduct(productId, updateData);
        res.status(200).json({
            message: "Product Update successfully",
            success: true,
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error,
          })
    }
}

const deleteProduct = async (req:Request, res:Response)=>{
    try {
        const {productId} = req.params;
        const result = await ProductServices.deleteProduct(productId);
        res.status(200).json({
            message: "Product delete successfully",
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}


export const ProductControllers = {
    createProduct,
    getAllProduct,
    getOneProductFromDB,
    updateProduct,
    deleteProduct,
}