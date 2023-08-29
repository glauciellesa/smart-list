import express from "express";
import productService from "../services/productService.js";

const product = express.Router();

product.post("/api/products", async (req, res, next) => {
  console.log("req", req.body);

  try {
    const createdproduct = await productService.addProduct(req.body);
    res.status(201).json({ createdproduct });
  } catch (error) {
    return next(error);
  }
});

product.get("/api/products", async (req, res, next) => {
  try {
    const productName = req.query.name; // Get the 'name' query parameter from the request URL
    if (productName) {
      console.log("productName:", productName);
      const product = await productService.getProductbyName(productName);
    } else {
      console.log("no");
    }
  } catch (error) {
    return next(error);
  }
});

export default product;
