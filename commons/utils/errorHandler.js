const errorHandler = error => {
  const errorObject = {
    message: error?.message || 'Internal server error',
    stack: error?.stack,
    statusCode: error?.statusCode || 500,
  };

  return errorObject;
};

module.exports = errorHandler;
