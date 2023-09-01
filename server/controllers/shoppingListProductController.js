import express from "express";

import shoppingListProductRepo from "../repositories/shoppingListProductRepo.js";
import shoppingListProductService from "../services/shoppingListProductService.js";

const shoppingList = express.Router();

shoppingList.post(
  "/api/shoppingLists/:shoppingListId/products",
  async (req, res, next) => {
    try {
      const clienteRequestId = req.email._id;
      const createdList =
        await shoppingListProductService.addProductIntoUserList(
          clienteRequestId,
          req.body
        );
      res.status(201).json({ createdList }).end();
    } catch (error) {
      return next(error);
    }
  }
);

shoppingList.get(
  "/api/shoppingLists/:shoppingListId/products",
  async (req, res, next) => {
    try {
      const clienteRequestId = req.email._id;
      const userLists =
        await shoppingListProductRepo.getProductsFromShoppingList(
          clienteRequestId
        );
      res.status(200).json(userLists).end();
    } catch (error) {
      return next(error);
    }
  }
);

shoppingList.put(
  "/api/shoppingLists/:shoppingListId/products/:productId",
  async (req, res, next) => {
    try {
      const clienteRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;

      const editedList =
        await shoppingListProductService.checkProductBeforeEdit(
          clienteRequestId,
          shoppingListId,
          req.body
        );

      console.log({ editedList });
      res.status(200).json(editedList).end();
    } catch (error) {
      return next(error);
    }
  }
);

//I think just the person that has created the shoppingList are able to delete it.
shoppingList.delete(
  "/api/shoppingLists/:shoppingListId/products/:productId",
  async (req, res, next) => {
    try {
      const clienteRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;
      console.log({ shoppingListId });

      const checkToDelet =
        await shoppingListProductService.checkProductBeforeDelete(
          clienteRequestId,
          shoppingListId
        );

      res.status(200).json(checkToDelet).end();
    } catch (error) {
      return next(error);
    }
  }
);

export default shoppingList;
