import mongoose from "mongoose";
import validator from "../services/validator.js";
import connection from "../repositories/connection.js";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category_name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    validate: [validator.isNotEmpty, "category name is empty"],
  },
  icon: {
    type: String,
    trim: true,
    required: false,
  },
});

const Category = connection.model("Category", categorySchema);

export default Category;
