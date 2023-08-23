import express from "express";
import userController from "./controllers/userController.js";
import middleware from "./middlewares/middleware.js";
import config from "./config/config.js";
import apiDocs from "./documentation/apidoc.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(middleware);
app.use(userController);
apiDocs(app);
app.use(errorHandler);

app.listen(config.port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log(`[INFO] Server Running on port: ${config.port}`);
  }
});
