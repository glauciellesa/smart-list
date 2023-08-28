import mongoose from "mongoose";
import validator from "../services/validator.js";
import Category from "./CategoryModel.js";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    validate: [validator.isNotEmpty, "Product name is empty"],
  },
  image: {
    type: String,
    trim: true,
    required: false,
  },
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: Category,
  },
});

const Product = mongoose.model("productSchema", productSchema);

export default Product;
