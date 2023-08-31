import mongoose from "mongoose";
import Product from "./ProductModel.js";
import connection from "../repositories/connection.js";
import User from "./UsersModel.js";

const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: User,
    unique: true,
  },
  lists: [
    new Schema({
      listName: {
        type: String,
        required: true,
      },
      productLists: [
        {
          product_id: {
            type: mongoose.Types.ObjectId,
            ref: Product,
            unique: true,
            required: true,
          },
          frequency: {
            type: String,
            required: false,
            /* soon, pretty soon, not soon */
          },
          quantity: {
            type: Number,
            required: "Quantity is required",
            required: false,
          },
        },
      ],
    }),
  ],
});

const ShoppingList = connection.model("shoppingList", shoppingListSchema);

export default ShoppingList;
