import express from "express";
import categoryService from "../services/categoryService.js";

const category = express.Router();

category.post("/api/categories", async (req, res, next) => {
  console.log("work", req.body);
  try {
    const createdCategory = await categoryService.addNewCategory(req.body);
    console.log({ createdCategory });
    res.status(201).json({ createdCategory });
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
