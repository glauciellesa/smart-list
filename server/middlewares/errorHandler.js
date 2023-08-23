const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;

  return res.status(statusCode ?? 500).json({
    error: statusCode,
    message: err.message,
  });
};

export default errorHandler;
