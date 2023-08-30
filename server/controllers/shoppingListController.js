import express from "express";
import shoppingListService from "../services/shoppingListService.js";

const shoppingList = express.Router();

shoppingList.post("/api/shoppingLists", async (req, res, next) => {
  try {
    const clienteRequestId = req.email._id;
    const createdList = shoppingListService.addNewShoppingList(
      clienteRequestId,
      req.body
    );
    res.status(201).json({ createdList }).end();
  } catch (error) {
    return next(error);
  }
});

shoppingList.get("/api/shoppingLists", async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
});

shoppingList.put(
  "/api/shoppingLists/:shoppingListId",
  async (req, res, next) => {
    try {
    } catch (error) {
      return next(error);
    }
  }
);

//I think just the person that has created the shoppingList are able to delete it.
shoppingList.delete(
  "/api/shoppingLists/:shoppingListId",
  async (req, res, next) => {
    try {
    } catch (error) {
      return next(error);
    }
  }
);

export default shoppingList;
