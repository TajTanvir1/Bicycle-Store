import express  from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router()

router.post('/', ProductControllers.createProduct);

router.get('/:productId', ProductControllers.getOneProductFromDB);
router.get('/', ProductControllers.getAllProduct);
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);


export const ProductRoutes = router;

    // Create  - 	/api/products (Post)
	// Get All - 	/api/products (Get)
	// Get one - 	/api/products/:productId (Get)
	// Update One - 	/api/products/:productId (Put)
	// Delete One - 	/api/products/:productId (Delete)
	
	// Order -		/api/orders (Post)
	// Calculate - 	/api/orders/revenue (Get)