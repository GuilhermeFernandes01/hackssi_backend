const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const getUser = async (request, reply) => {
    const { params, headers } = request;
    return adapters.getUser({
      params,
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

  const createUser = async (request, reply) => {
    const { payload, headers } = request;
    return adapters.createUser({
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
    getUser,
    createUser,
  };
};

module.exports = wrapper;
