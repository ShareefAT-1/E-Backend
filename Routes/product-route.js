const express = require("express");
const productCtrl = require("../Controls/product-control");
const { verifyToken, verifyRole } = require("../middleware/auth-middleware");

const router = express.Router();

router.get("/", productCtrl.getAllProducts);

router.post("/", verifyToken, productCtrl.createProduct);

router.put("/:productId", verifyToken, productCtrl.updateProduct);

router.delete("/:productId", verifyToken, productCtrl.deleteProduct);

router.get("/:productId", verifyToken, productCtrl.specificProduct);

module.exports = router;
