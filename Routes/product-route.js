const express = require("express");
const productCtrl = require("../Controls/product-control");
const { verifyToken, verifyRole } = require("../middleware/auth-middleware");

const router = express.Router();

router.get("/", productCtrl.getAllProducts);

router.post("/",  productCtrl.createProduct);

router.put("/:productId",  productCtrl.updateProduct);

router.delete("/:productId",  productCtrl.deleteProduct);

router.get("/:productId",  productCtrl.specificProduct);

module.exports = router;
