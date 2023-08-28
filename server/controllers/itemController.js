import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */

router.post("/api/items/newItem", async (req, res, next) => {
  console.log("item", req.body);
  res.send("Hello World!");
});

router.get("/api/items/", async (req, res, next) => {});
router.get("/api/items", async (req, res, next) => {});
router.get("/api/items/:itemId", async (req, res, next) => {});

export default router;
