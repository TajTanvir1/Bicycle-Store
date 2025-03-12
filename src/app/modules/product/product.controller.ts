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
        console.log(error)
    }
}


export const ProductControllers = {
    createProduct,
    getAllProduct,
    getOneProductFromDB,
}