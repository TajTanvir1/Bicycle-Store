L2 A2 - Backend with Mongoose

***Name - Bi-cycle Store

Link - https://github.com/Apollo-Level2-Web-Dev/batch-4-assignment-2/blob/main/4-Bi-Cycle-Store.md

Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Bicycle Store.


*1. Modules - products, orders

*2. Generic Error Response - massage, Success, Error, stack(path)

*3.  APIs 
	Create  - 	/api/products (Post)
	Get All - 	/api/products (Get)
	Get one - 	/api/products/:productid (Get)
	Update One - 	/api/products/:productid (Put)
	Delete One - 	/api/products/:productid (Delete)
	Order -		/api/orders (Post)
	Calculate - 	/api/orders/revenue (Get)
	

*4. Create a Bicycle - /api/products (Post)
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}

**Response
{
  "message": "Bicycle created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}


*5. Get All Bicycle - /api/products (Get)

*6. Query: /api/products?searchTerm=type (searchTerm can be name, brand, type)

*7. Get a Specific Bicycle - /api/products/:productid (Get)
	
*8. Update a Bicycle - /api/products/:productid (Put)

*9. Delete a Bicycle - /api/products/:productid (Delete)

*10. Order a Bicycle - /api/orders (Post)
	*Inventory Management Logic:
	When an order is placed, reduce the quantity in the product model.
	If the inventory quantity goes to zero, set inStock to false.
	Handle insufficient stock cases by returning an appropriate error message.
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 600
}
**Response
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 600,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}

*11. Calculate Revenue from Orders (Aggregation) - /api/orders/revenue (Get)
	*Use MongoDB aggregation pipeline to calculate the total revenue from all orders.
	*Calculate the total price by multiplying the price of each bicycle by the quantity ordered.
	*Response: The total revenue from all orders.
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 1200 // Total revenue calculated from all orders
  }
}


*12. Code Should be Clean , Meaningful Variables & function name

*13. APi should be same and ensure Req , Res match Specifications

*14. Error Handling - for scenarios like invalid input, missing data, and insufficient stock.
	Not Found - If a book or order is not found, return a 404 error with an appropriate message.
	Validation Errors: Return specific error messages for validation failures (e.g., invalid email, 		insufficient stock).

*15. Video Explanation - the key features of your Bicycle Store API and the logic behind its design and test APIs.



==============================
	Need to Submit
==============================
1. GitHub Repository Link
2. Live Deployment Link
3. Video Explanation (Public Link)