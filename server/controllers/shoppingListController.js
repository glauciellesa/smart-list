import express from "express";
import shoppingListService from "../services/shoppingListService.js";
import shoppingListRepository from "../repositories/shoppingListRepository.js";

const shoppingList = express.Router();

shoppingList.post("/api/shoppingLists", async (req, res, next) => {
  try {
    const clientRequestId = req.user._id;
    const createdList = await shoppingListService.createNewUserList(
      clientRequestId,
      req.body
    );
    res.status(201).json({ createdList }).end();
  } catch (error) {
    return next(error);
  }
});

shoppingList.get("/api/shoppingLists", async (req, res, next) => {
  try {
    const clientRequestId = req.user._id;
    const userLists = await shoppingListRepository.getAllUserList(
      clientRequestId
    );
    res.status(200).json(userLists).end();
  } catch (error) {
    return next(error);
  }
});

shoppingList.get(
  "/api/shoppingLists/:shoppingListId",
  async (req, res, next) => {
    try {
      const clientRequestId = req.user._id;
      const shoppingListId = req.params.shoppingListId;

      const userLists = await shoppingListService.getUserList(
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
  "/api/shoppingLists/:shoppingListId",
  async (req, res, next) => {
    try {
      const clientRequestId = req.user._id;
      const shoppingListId = req.params.shoppingListId;

      const editedList = await shoppingListService.checkBeforeEdit(
        clientRequestId,
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
  "/api/shoppingLists/:shoppingListId",
  async (req, res, next) => {
    try {
      const clientRequestId = req.user._id;
      const shoppingListId = req.params.shoppingListId;
      console.log({ shoppingListId });

      const checkToDelet = await shoppingListService.checkBeforeDelete(
        clientRequestId,
        shoppingListId
      );

      res.status(200).json(checkToDelet).end();
    } catch (error) {
      return next(error);
    }
  }
);

export default shoppingList;
