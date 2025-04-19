const Product = require("../models/product-model");

// Get all products
module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "Products fetched successfully", products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Create a new product
module.exports.createProduct = async (req, res) => {
  try {
    const productDetails = req.body;
    const newProduct = new Product(productDetails);
    await newProduct.save();
    res.status(200).json({ message: "Product added successfully", newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

/////////////////////////////////// Update a product////////////////////////////
module.exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { title, description, price } = req.body;

    const product = await Product.findById(productId);
    product.title = title || product.title;
    product.description = description || product.description;
    product.price = price || product.price;

    const updatedProduct = await product.save();
    res.status(200).json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

/////////////////////////////////// Delete a product///////////////////////////////
module.exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

/////////////////////////////////// Get a specific product//////////////////////////
module.exports.specificProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json({ message: "Product found", product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};
