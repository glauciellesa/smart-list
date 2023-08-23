import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userRepository from "../repositories/userRepository.js";

/* https://javascript.plainenglish.io/authentication-systems-using-jwt-and-node-js-9c3cc14aaf82 */
export const verifyToken = (req, res, next) => {
  const authorization = req.headers["authorization"];

  const token = authorization?.replace("Bearer ", "");

  jwt.verify(token, config.jwtKey, async (err, authorizedData) => {
    console.log(authorizedData);
    if (err) {
      res.sendStatus(403); //Forbidden
    } else {
      req.email = await userRepository.getUserByEmail(authorizedData.email);
      next();
    }
  });
};
