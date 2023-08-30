import mongoose from "mongoose";
import validator from "../services/validator.js";
import User from "./UsersModel.js";
import connection from "../repositories/connection.js";

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: User,
    unique: true,
  },
  userRecipes: [
    {
      photo: {
        type: String,
      },
      name: {
        type: String,
        trim: true,
        required: true,
        validate: [validator.isNotEmpty, "Recipe title can not be empty"],
      },

      timeToPrepare: {
        type: String,
      },
      ingredients: [String],
      instructions: {
        type: String,
      },
    },
  ],
});

const Recipe = connection.model("Recipe", recipesSchema);

export default Recipe;
