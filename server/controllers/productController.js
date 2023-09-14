import express from "express";
import productService from "../services/productService.js";
import productRepository from "../repositories/productRepository.js";

const product = express.Router();

product.post("/api/products", async (req, res, next) => {
  try {
    const createdproduct = await productService.addProduct(req.body);
    res.status(201).json({ createdproduct }).end();
  } catch (error) {
    return next(error);
  }
});

product.get("/api/products", async (req, res, next) => {
  try {
    const productName = req.query.name;
    if (productName) {
      console.log("productName:", productName);
      const allProduct = await productRepository.getProductbyName(productName);
      res.status(201).json({ allProduct }).end();
    } else {
      const allProduct = await productRepository.getProducts();
      res.status(201).json({ allProduct }).end();
    }
  } catch (error) {
    return next(error);
  }
});

export default product;
