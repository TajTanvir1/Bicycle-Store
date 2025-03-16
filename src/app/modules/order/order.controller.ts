import { Request, Response } from "express";
import { OrderServices } from "./order.service";



const createAnOrder = async (req:Request, res:Response) =>{
try {
     const order = req.body;
    
        const result = await OrderServices.createAnOrder(order);
    
        
        res.status(200).json({
            message: "Order created successfully",
            success: true,
            data: result
        })
} catch (error) {
    console.log(error);
}
}



export const OrderControllers = {
    createAnOrder
}
