import mongoose from "mongoose";
import config from "../config/config.js";

const connection = await mongoose
  .createConnection(
    `mongodb+srv://${config.adm}:${config.password}@atlascluster.l9wb5cn.mongodb.net/smart_list?retryWrites=true&w=majority`
  )
  .asPromise()
  .then((connection) => {
    console.log("Connected to mongoDB!");
    return connection;
  })
  .catch((error) => {
    console.log("err", error);
  });

export default connection;
