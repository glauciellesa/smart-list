import { InvalidInputError } from "../errors/invalidInputError.js";

const errorHandler = (error, req, res, next) => {
  // Logging the error here
  //https://stackabuse.com/guide-to-exception-handling-in-express/
  console.log({ error });
  if (error instanceof InvalidInputError) {
    res
      .status(400)
      .json({ message: "Registration failed", error: error.message });
  } else {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

export default errorHandler;
