const express = require("express");
const connectDB = require("./config/db");
const cors=require("cors")
const cookieParser = require("cookie-parser");
const prdctRoute=require("./Routes/product-route")
const authRoute=require("./Routes/auth-route")
const orderRoute=require("./Routes/order-route")

require("dotenv").config();
connectDB()

const app = express();

app.use(cors({origin:"http://localhost:5173"}));

app.use(express.json())
app.use(cookieParser());

app.use("/products",prdctRoute)
app.use(authRoute)
app.use(orderRoute)



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running ...");
});
