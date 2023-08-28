import express from "express";
import productService from "../services/productService.js";

const product = express.Router();

product.post("/api/products", async (req, res, next) => {
  try {
    const createdproduct = await productService.addProduct(req.body);
    res.status(201).json({ createdUser });
  } catch (error) {
    return next(error);
  }
});

product.get(
  "/api/products?productName=:productName",
  async (req, res, next) => {
    res.status(200).json("products").end();
  }
);

product.post("/api/products", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

export default product;
