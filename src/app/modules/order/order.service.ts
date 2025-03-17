import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createAnOrder = async (orderData : TOrder)=>{
   const result = await OrderModel.create(orderData);
    return result;
}

export const OrderServices = {
    createAnOrder,
}
