import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  try {
    return res.status(200).json("hello from user route");
  } catch (error) {
    console.log(error);
  }
});

export default router;
