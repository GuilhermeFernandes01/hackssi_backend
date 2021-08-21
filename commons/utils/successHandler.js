const successHandler = data => {
  const response = {
    statusCode: data?.statusCode || 200,
    ...data,
  };

  return response;
};

module.exports = successHandler;
