import express from "express";
import categoryService from "../services/categoryService.js";
import categoryRepository from "../repositories/categoryRepository.js";

const category = express.Router();

category.post("/api/categories", async (req, res, next) => {
  try {
    const createdCategory = await categoryService.addNewCategory(req.body);

    res.status(201).json({ createdCategory });
  } catch (error) {
    return next(error);
  }
});

category.get("/api/categories", async (req, res, next) => {
  try {
    const categoryName = req.query.name;
    if (categoryName) {
      const category = await categoryRepository.getCategorybyName(categoryName);
      res.status(200).json({ category }).end();
    } else {
      const categories = await categoryRepository.getCategories();
      res.status(200).json({ categories }).end();
    }
  } catch (error) {
    return next(error);
  }
});

export default category;
