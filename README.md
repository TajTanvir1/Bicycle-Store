# Bicycle-Store-Backend


## Project Overview
This is a Express application built with TypeScript, integrating MongoDB with Mongoose to manage a **Bicycle Store**.
This project built for handling a "Bicycle Store" Express application side. We can handle several things in this server side like,
   1. Create Product 
   2. Update Product
   3. Delete Product
   4. Get one Product
   5. Get all Product
   6. Create an Order
   7. Calculate Revenue from Orders

In this Express application side data validation handle with TypeScript & Mongoose for get all data we need. Also has proper 'Success' & 'Error' code with proper massage.


## Features
- TypeScript for type safety and clean code.
- RESTful API architecture.
- MongoDB with Mongoose for efficient data management.
- CORS enabled for secure cross-origin requests.
- Environment variable management with `dotenv`.

## Project Setup Locally

1. Clone the Repository
```bash
git clone https://github.com/TajTanvir1/Bicycle-Store.git
```

2. Install Dependencies Needed
```bash
npm install
```

3. Set Up Environment Variables (create `.env` file):
```.env (file)

PORT=5000
DATABASE_URL=(mongodb connection)
```

4. Run the Application
```bash
npm run start:dev
```

* For building and using APIs Locally we need some platforms like Postman, API Platform Core etc.

## Endpoints
### Products
- `POST - /api/products` - Create a product
- `GET  - /api/products` - Get all products
- `GET  - /api/products/:productId` - Get a product by ID
- `PUT  - /api/products/:productId` - Update a product
- `DELETE- /api/products/:productId` - Delete a product

### Orders
- `POST  - /api/orders` - Create an order
- `GET   - /api/orders/revenue` - Calculate revenue


## Endpoints Details

### **1. Create a Bicycle**

- **Endpoint:** **`/api/products`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}
```

- **Response:** Success message and created bicycle details.

```json
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
```

---

### **2. Get All Bicycles**

- **Endpoint:** **`/api/products`**
- **Method:** `GET`
- **Response:** A list of all bicycles with details like name, brand, price, type, etc.
- **Query:** `/api/products?searchTerm=type` (`searchTerm` can be `name`, `brand`, `type`)

```json
{
  "message": "Bicycles retrieved successfully",
  "status": true,
  "data": [
    {
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
  ]
}
```

---

### **3. Get a Specific Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `GET`
- **Response:** The details of a specific bicycle by ID.

```json
{
  "message": "Bicycle retrieved successfully",
  "status": true,
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
```

---

### **4. Update a Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `PUT`
- **Request Body:** (Bicycle details to update)

```json
{
  "price": 350,
  "quantity": 15
}
```

- **Response:** Success message and updated bicycle details.

```json
{
  "message": "Bicycle updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 350, // Price updated
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 15, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
  }
}
```

---

### **5. Delete a Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the bicycle has been deleted.

```json
{
  "message": "Bicycle deleted successfully",
  "status": true,
  "data": {}
}
```

---

### **6. Order a Bicycle**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Inventory Management Logic:**
  - When an order is placed, reduce the **quantity** in the product model.
  - If the inventory quantity goes to zero, set **inStock** to `false`.
  - Handle **insufficient stock** cases by returning an appropriate error message.
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 600
}
```

- **Response:** Success message confirming the order.

```json
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
```

---

### **7. Calculate Revenue from Orders (Aggregation)**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Aggregation Suggestion:**
  - Use MongoDB aggregation pipeline to calculate the total revenue from `all orders`.
  - Calculate the total price by multiplying the price of each bicycle by the quantity ordered.
- **Response:** The total revenue from all orders.

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 1200 // Total revenue calculated from all orders
  }
}
```

## Scripts uses in package,json file
```json
{
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint src/**/*.ts",
  "lint:fix": "eslint src/**/*.ts --fix",
  "format": "prettier . --write",
  "start:prod": "node ./dist/server.js",
  "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts"
}
```


##  Additional Advantages 
- **Code Quality**: Write clean, well-documented code with meaningful variable and function names.
- **API Structure**: Follow the exact API structure and response format as specified. Deviations will result in penalties.
- **Error Handling**: Implement proper error handling for scenarios like invalid input, missing data, and insufficient stock.
- `404 Not Found`: Return when a product or order is not found.
- `Validation Errors`: Return specific error messages for validation failures (e.g., invalid email, insufficient stock).

# [Video Explanation](https://drive.google.com/drive/folders/1oAYpmteq98nClCC2rEy4H6d8B4Az3lpT?usp=sharing)
Here is a Video Explanation of this "Bicycle Store" Express application.

## Author
Developed by **Tanvir Ahamed Jubayer**
