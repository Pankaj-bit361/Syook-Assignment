# Project Documentation

Welcome to the documentation for the Syook Assignment project. This project is designed to showcase a frontend and backend application with various routes for orders, customers, items, and vehicles. Below, you'll find information about the different routes and their corresponding URLs.

## Frontend

The frontend of the project is accessible at [https://syook-assignment-frontend.vercel.app/](https://syook-assignment-frontend.vercel.app/). This is the user interface that interacts with the backend through the provided API routes.

## Backend

The backend of the project serves as the API server, handling various routes for different functionalities. The base URL for the backend is [https://syook-assignment-backend.vercel.app/](https://syook-assignment-backend.vercel.app/).

### Order Routes

- URL: [https://syook-assignment-backend.vercel.app/order](https://syook-assignment-backend.vercel.app/order)
- Description: This route handles operations related to orders.

Example Order Payload:
```json
{
  "orderNumber": "0001",
  "itemId": "item_id_here",
  "price": 50.99,
  "customerId": "customer_id_here",
  "deliveryVehicleId": "vehicle_id_here",
  "isDelivered": false
}
Customer Routes
URL for Customer Login: https://syook-assignment-backend.vercel.app/customer/login
URL for Customer Signup: https://syook-assignment-backend.vercel.app/signup
Description: These routes manage customer authentication and registration.
Example Customer Signup Payload:

json
Copy code
{
  "name": "John Doe",
  "city": "New York",
  "email": "pnkjvshsht!@gmail.com",
  "password": "pankaj"
}
Item Routes
URL: https://syook-assignment-backend.vercel.app/item
Description: This route is responsible for item-related operations.
Example Item Payload:

json
Copy code
{
  "item": "Product Name",
  "price": 30.00
}
Vehicle Routes
URL: https://syook-assignment-backend.vercel.app/vehicle
Description: This route handles operations related to vehicles.
Example Vehicle Payload:

json
Copy code
{
  "registrationNumber": "ABC123",
  "vehicleType": "bike",
  "city": "Los Angeles",
  "image": "vehicle_image_url_here",
  "activeOrdersCount": 0
}
How to Use
Start by accessing the frontend at https://syook-assignment-frontend.vercel.app/.
Interact with the user interface to perform various actions.
The frontend will communicate with the backend through the API routes mentioned above.
Use the provided backend route URLs for specific functionalities, such as orders, customers, items, and vehicles.
Additional Information
For more details about how to use the API routes and their specific functionalities, refer to the source code or any provided API documentation.

Support
If you encounter any issues or need assistance, please feel free to contact our support team at pnkjvshsht1@gmail.com.
