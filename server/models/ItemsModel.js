import mongoose from "mongoose";
import validator from "../validators/validator.js";

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  item_name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    validate: [validator.isNotEmpty, "Item name is empty"],
  },
  image: {
    type: String,
    trim: true,
    required: false,
  },
  category: {
    type: String,
    trim: true,
    required: false,
  },
});

const Item = mongoose.model("itemsSchema", itemsSchema);

export default Item;
