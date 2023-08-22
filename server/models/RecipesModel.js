import mongoose from "mongoose";
import validator from "../validators/validator.js";
import Item from "./ItemsModel.js";

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: User,
    unique: true,
  },
  recipe: [
    {
      tile: {
        type: String,
        trim: true,
        required: true,
        validate: [validator.isNotEmpty, "Recipe title can not be empty"],
      },
      photo: {
        type: String,
      },
      portion: {
        type: Number,
      },
      timeToPrepare: {
        type: Number,
      },
      Ingredients: [
        {
          item_id: {
            type: mongoose.Types.ObjectId,
            ref: Item,
            unique: true,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

const recipe = mongoose.model("recipe", recipesSchema);

export default recipe;
