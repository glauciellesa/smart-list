import express from "express";

import shoppingListProductService from "../services/shoppingListProductService.js";

const shoppingList = express.Router();

shoppingList.post(
  "/api/shoppingLists/:shoppingListId/products",
  async (req, res, next) => {
    try {
      const clientRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;
      const createdList =
        await shoppingListProductService.addProductIntoUserList(
          clientRequestId,
          shoppingListId,
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
      const clientRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;
      const userLists =
        await shoppingListProductService.joinAndgetProductsFromList(
          clientRequestId,
          shoppingListId
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
      const clientRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;
      const productId = req.params.productId;

      const editedList =
        await shoppingListProductService.checkProductBeforeEdit(
          clientRequestId,
          shoppingListId,
          productId,
          req.body
        );

      res.status(200).json(editedList).end();
    } catch (error) {
      return next(error);
    }
  }
);

//I think just the person that has created the shoppingList are able to delete it.
shoppingList.delete(
  "/api/shoppingLists/:shoppingListId/products/:productListId",
  async (req, res, next) => {
    try {
      const clientRequestId = req.email._id;
      const shoppingListId = req.params.shoppingListId;
      const productListId = req.params.productId;

      const checkToDelet =
        await shoppingListProductService.checkProductBeforeDelete(
          clientRequestId,
          shoppingListId,
          productListId
        );

      res.status(200).json(checkToDelet).end();
    } catch (error) {
      return next(error);
    }
  }
);

export default shoppingList;
