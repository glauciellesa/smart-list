import express from "express";
import userController from "./controllers/userController.js";
import middleware from "./middlewares/middleware.js";
import config from "./config/config.js";

const app = express();

app.use(middleware);
app.use(userController);

app.listen(config.port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log(`[INFO] Server Running on port: ${config.port}`);
  }
});
