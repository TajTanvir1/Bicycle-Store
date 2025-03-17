import express  from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router()

// @ts-ignore
router.post('/', OrderControllers.createAnOrder);


export const OrderRoutes = router;

    // Create  - 	/api/products (Post)
    // Get All - 	/api/products (Get)
    // Get one - 	/api/products/:productId (Get)
    // Update One - 	/api/products/:productId (Put)
    // Delete One - 	/api/products/:productId (Delete)
    
    // Order -		/api/orders (Post)
    // Calculate - 	/api/orders/revenue (Get)
