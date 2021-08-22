const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const authenticateUser = async (request, reply) => {
    const { payload, headers } = request;
    return adapters.authenticateUser({
      payload,
      headers,
      onSuccess: data => {
        const { statusCode, ...response } = successHandler(data);
        return reply.response(response).code(statusCode);
      },
      onError: error => {
        const errorObject = errorHandler(error);
        return reply.response(errorObject).code(errorObject.statusCode);
      },
    });
  };

  return {
    authenticateUser,
  };
};

module.exports = wrapper;
