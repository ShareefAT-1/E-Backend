const Product = require("../models/product-model");

///////////////////////////Getall-Products////////////////////////////

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched succeccfully", products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Products fetching failed" });
  }
};

///////////////////////////Create-Product////////////////////////////


module.exports.createProduct = async (req, res) => {
  try {
    const productDetails = req.body;
    // const newProduct = await Product.create(productDetails);

    const newProduct = new Product(productDetails);
    newProduct.price = 50;
    await newProduct.save();

    res
      .status(200)
      .json({ message: "Products Added succeccfully", newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product Adding failed", error: error.message });
  }
};

///////////////////////////Update-Product////////////////////////////

module.exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const { price, title, description } = req.body;
    const product = await Product.findOne({ _id: productId });

    product.title = title ? title : product.title;
    product.description = description ? description : product.description;
    product.price = price ? price : product.price;

    const updateProduct = await product.save();
    console.log(updateProduct)
    res
      .status(200)
      .json({ message: "Product updated succeccfully", updateProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product updation failed", error: error.message });
  }
};

///////////////////////////Delete-Product////////////////////////////

module.exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: "Product Deleted succeccfully",product});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product Deletion failed", error: error.message });
  }
};

///////////////////////////Specific-Product////////////////////////////

module.exports.specificProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    res.status(200).json({ message: "This is the Product 🔍",product});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product not found", error: error.message });
  }
};