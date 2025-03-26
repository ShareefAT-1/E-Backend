const Order = require("../models/order-model");
const { create } = require("../models/product-model");
//////////////////////Create-Order////////////////////

module.exports.createorder = async (req, res) => {
  try {
    console.log(req.user);
    const { product, totalPrice } = req.body;

    const order = new Order({
      user: req.user.id,
      product: product,
      totalPrice,
    });
    const newOrder = await order.save();
    res.status(201).json({ message: "Order Placed", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Order Failed", error:error.message });
  }
};

///////////////////GetAll-oreders/////////////////

module.exports.getAllorders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("product");
    res.status(200).json({ message: "Order Created", orders });
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Order Creation Failed ",error:error.message})
  }
};
