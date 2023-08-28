import express from "express";
import { verifyToken } from "../services/authService.js";

const router = express.Router();

router.use(verifyToken);
/**
 * @swagger
 * /api/recipe:
 *   post:
 *     summary: Creates a user
 *     description: insert a new user to the db.
 */

router.post("/api/recipes/newRecipe", async (req, resp, next) => {});
router.get("/api/recipes", async (req, resp, next) => {});
router.get("/api/recipes/:recipeId", async (req, resp, next) => {});

//I think just the person that has created the recipe are able to delete it.
router.delete("/api/recipes/:recipeId", async (req, resp, next) => {});

export default router;
