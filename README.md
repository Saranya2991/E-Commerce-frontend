**MERN Stack E-Commerce Website**
**📌 Introduction**

This project is a fully functional E-Commerce Web Application developed as the final assignment for the Full Stack Program.
It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and provides a complete online shopping experience, including product browsing, user authentication, shopping cart functionality, order management.

**🚀 Features**
🏠 Home Page

Featured products and promotional sections

Navigation links to Products, Cart, User Account

🛍️ Product Listing Page

Display products with:

Images(Click on Image that navigate to product description page)

Names

Prices

“Add to Cart” functionality

Search and filter functionality for easy browsing

📦 Product Detail Page

Detailed product information

Price and description

Add to Cart Button

🛒 Shopping Cart

View products added to the cart

Update product quantities

Remove products from the cart

Display total price

Proceed to checkout

💳 Checkout & Orders

Shipping information form

Payment details (optional integration)

Order summary and confirmation

Order history for registered users

🔐 User Authentication

User registration and login

Protected routes

User account management

🧰 Technologies Used
Frontend

React

React Router

Axios

HTML5

Tailwind CSS

JavaScript (ES6+)

Backend

Node.js

Express.js

MongoDB

Mongoose

Firebase

🔌 API Endpoints Overview
Product

GET /product – Get all products

GET /product/:id – Get product details

Cart

POST /api/cart/add – Add item to cart

PUT /api/cart/update – Update cart item

DELETE /api/cart/remove/:userId/:productId – Remove item from cart

GET /api/cart/:userId – Get user Cart

Orders

POST /api/orders – Place order

