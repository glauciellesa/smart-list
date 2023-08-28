import express from "express";
import categoryService from "../services/categoryService.js";

const category = express.Router();

category.post("/api/categorys", async (req, res, next) => {
  try {
    const createdCategory = await categoryService.addCategory(req.body);
    res.status(201).json({ createdUser });
  } catch (error) {
    return next(error);
  }
});

category.get(
  "/api/categories?categoryName=:categoryName",
  async (req, res, next) => {
    try {
      res.status(200).json("categorys").end();
    } catch (error) {
      return next(error);
    }
  }
);

category.post("/api/categories", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

export default category;
