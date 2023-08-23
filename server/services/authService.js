import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userRepository from "../repositories/userRepository.js";

/* https://javascript.plainenglish.io/authentication-systems-using-jwt-and-node-js-9c3cc14aaf82 */
export const verifyToken = (req, res, next) => {
  const authorization = req.headers["authorization"];

  /*   const token = authorization.replace("Bearer ", "");
  console.log({ token }); */

  jwt.verify(token, config.jwtKey, async (err, authorizedData) => {
    if (err) {
      res.sendStatus(401); //Unautohorized
    } else {
      console.log(authorizedData.user);
      console.log(req.user);
      /* req.user = await userRepository.existUser(
        authorizedData.user.email,
        authorizedData.user.password
      ); 
      next();
      */
    }
  });
};
