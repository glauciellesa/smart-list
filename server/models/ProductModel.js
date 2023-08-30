import mongoose from "mongoose";
import validator from "../services/validator.js";
import connection from "../repositories/connection.js";
import Category from "../models/CategoryModel.js";

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

const Product = connection.model("Product", productSchema);

export default Product;
