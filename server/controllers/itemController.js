import express from "express";

const item = express.Router();

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */

item.post("/api/items/newItem", async (req, res, next) => {
  console.log("item", req.body);
  res.send("Hello World!");
});

item.get("/api/items/", async (req, res, next) => {});
item.get("/api/items", async (req, res, next) => {});
item.get("/api/items/:itemId", async (req, res, next) => {});

export default item;
