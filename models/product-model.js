const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  prodectId: {
    type: String,
    default:()=>Date.now(), 
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
