import mongoose from "mongoose";
import Item from "./ItemsModel.js";

const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: User,
    unique: true,
  },
  list: [
    {
      item_id: {
        type: mongoose.Types.ObjectId,
        ref: Item,
        unique: true,
      },
      frequency: {
        type: String,
        required: false,
      },
      quantity: {
        type: number,
        required: "Quantity is required",
      },
    },
  ],
});

const shoppingList = mongoose.model("shoppingList", shoppingListSchema);

export default shoppingList;
