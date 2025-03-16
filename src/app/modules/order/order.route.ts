import express  from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router()

router.post('/', OrderControllers.createAnOrder);

// router.get('/products/:productId', ProductControllers.getOneProductFromDB);
// router.get('/products', ProductControllers.getAllProduct);
// router.put('/products/:productId', ProductControllers.updateProduct);
// router.delete('/products/:productId', ProductControllers.deleteProduct);


export const OrderRoutes = router;

    // Create  - 	/api/products (Post)
    // Get All - 	/api/products (Get)
    // Get one - 	/api/products/:productId (Get)
    // Update One - 	/api/products/:productId (Put)
    // Delete One - 	/api/products/:productId (Delete)
    
    // Order -		/api/orders (Post)
    // Calculate - 	/api/orders/revenue (Get)
