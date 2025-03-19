import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import mongoose from 'mongoose';
import { OrderModel } from './order.model';

const createAnOrder = async (req: Request, res: Response) => {
  try {
    const {
      product: productId,
      quantity: orderQuantity,
      email,
      totalPrice,
    } = req.body;

    const convertedTotalPrice = Number(totalPrice);

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid Product ID',
        });
      }

    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: 'Product is not found',
        success: false,
      });
    }

    const calculatedPrice = product.price * orderQuantity;

    if (convertedTotalPrice !== calculatedPrice) {
      return res.status(400).json({
        message: 'Product price is not match',
        success: false,
      });
    }

    if (product.quantity < orderQuantity) {
      return res.status(400).json({
        message: 'Insufficient product stock',
        success: false,
      });
    }

    const newQuantity = product.quantity - orderQuantity;

    await ProductModel.findByIdAndUpdate(productId, {
      quantity: newQuantity,
      inStock: newQuantity > 0 ? true : false,
    });

    const orderData: TOrder = {
      email,
      product: productId,
      quantity: orderQuantity,
      totalPrice: calculatedPrice,
    };

    const result = await OrderServices.createAnOrder(orderData);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error : any) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.massage,
    });
  }
};

const getRevenue = async (req:Request, res:Response)=>{
    try {
        const revenue = await OrderModel.aggregate([
            {
                $group :{
                    _id: null,
                    // @ts-ignore
                    totalRevenue : {$sum : "$totalPrice"},
                }
            }
        ]);

        res.status(200).json({
            message: 'Revenue get successfully',
            success: true,
            data :{totalRevenue : revenue[0]?.totalRevenue},
          });
        } catch (error : any) {
          return res.status(500).json({
            success: false,
            message: 'Something is Wrong',
            error: error.massage,
          });
        }
}

export const OrderControllers = {
  createAnOrder,
  getRevenue,
};
