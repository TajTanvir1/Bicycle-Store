import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());


// Application Routes
app.use('/api', ProductRoutes);


    // Create  - 	/api/products (Post)
	// Get All - 	/api/products (Get)
	// Get one - 	/api/products/:productid (Get)
	// Update One - 	/api/products/:productid (Put)
	// Delete One - 	/api/products/:productid (Delete)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Bi-Cycle Store');
});

export default app;
