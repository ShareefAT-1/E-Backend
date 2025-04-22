
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/auth-route");
const productRoute = require("./Routes/product-route");
const orderRoute = require("./Routes/order-route");
require("dotenv").config();

connectDB(); 

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"], 
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/products", productRoute);  
app.use("/orders", orderRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
