const express = require("express");
const orderController = require("../Controls/order-control");
const {verifyToken,verifyRole}=require("../middleware/auth-middleware")

const router = express.Router();

router.post("/order",verifyToken,orderController.createorder);
router.get("/orders",verifyToken,orderController.getAllorders);

module.exports = router;