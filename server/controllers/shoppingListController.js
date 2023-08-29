import express from "express";
import { verifyToken } from "../services/authService";

const shoppingList = express.Router();

shoppingList.use(verifyToken);

shoppingList.post("/api/shoppingLists/:producId", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

shoppingList.get("/api/shoppingLists", async (req, resp, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

shoppingList.get(
  "/api/shoppingLists/:shoppingListId",
  async (req, resp, next) => {
    try {
    } catch (error) {
      return next(error);
    }
  }
);

//I think just the person that has created the shoppingList are able to delete it.
shoppingList.delete(
  "/api/shoppingLists/:shoppingListId",
  async (req, resp, next) => {
    try {
    } catch (error) {
      return next(error);
    }
  }
);

export default shoppingList;
