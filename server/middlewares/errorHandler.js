import { InvalidInputError } from "../errors/invalidInputError.js";
import { NoContentError } from "../errors/NoContentError.js";

const errorHandler = (error, req, res, next) => {
  // Logging the error here
  //https://stackabuse.com/guide-to-exception-handling-in-express/
  console.log("error", { error });
  if (error instanceof NoContentError) {
    res.status(205).json({ message: "No content", error: error.message });
  } else if (error instanceof InvalidInputError) {
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
