import { InvalidInputError } from "../errors/invalidInputError.js";
import { NoContentError } from "../errors/noContentError.js";
import { PermissionError } from "../errors/permissionError.js";

const errorHandler = (error, req, res, next) => {
  // Logging the error here
  //https://stackabuse.com/guide-to-exception-handling-in-express/

  if (error instanceof NoContentError) {
    res.status(400).json({ message: "No content", error: error.message });
  } else if (error instanceof InvalidInputError) {
    res.status(400).json({ message: "Failed", error: error.message });
  } else if (error instanceof PermissionError) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  } else {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default errorHandler;
