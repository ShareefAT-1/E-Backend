# E-Commerce Backend

## 📌 Description
This is a backend API for an e-commerce website, built using **Node.js**, **Express**, and **MongoDB**. It provides functionality for managing users, products, and orders.

## 🚀 Features
- **User Authentication**: Register and log in users with JWT-based authentication.
- **Product Management**: CRUD operations for products.
- **Order Management**: Create and fetch orders.
- **Role-Based Access**: Admins can manage products and view all orders.

---

## 📚 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose ODM)**
- **JSON Web Tokens (JWT)**

---

## 📌 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### **4️⃣ Start the Server**
```sh
npm start
```
The server will run on **http://localhost:5000**.

---

## 📌 API Endpoints

### 🔹 **User Routes**
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | Log in a user |

### 🔹 **Product Routes**
| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/products` | Retrieve all products |
| POST | `/products` | Add a new product (Admin only) |
| PUT | `/products/:id` | Update a product (Admin only) |
| DELETE | `/products/:id` | Delete a product (Admin only) |

### 🔹 **Order Routes**
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/orders` | Create a new order (User only) |
| GET | `/orders/:id` | View a specific order |
| GET | `/orders` | View all orders (Admin only) |

---

## 📌 Authentication & Authorization
- **JWT Authentication**: Users must include a Bearer token in the `Authorization` header.
- **Role-Based Access Control (RBAC)**:
  - Users can place orders.
  - Admins can manage products and view all orders.

---

## 📌 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## 📌 Contact
For any issues, please open an issue in the repository or contact **lonwolf699@gmail.com**.

