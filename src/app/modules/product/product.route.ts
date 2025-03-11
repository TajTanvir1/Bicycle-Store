import express  from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router()

router.post('/products', ProductControllers.createProduct);


export const ProductRoutes = router;

    // Create  - 	/api/products (Post)
	// Get All - 	/api/products (Get)
	// Get one - 	/api/products/:productid (Get)
	// Update One - 	/api/products/:productid (Put)
	// Delete One - 	/api/products/:productid (Delete)