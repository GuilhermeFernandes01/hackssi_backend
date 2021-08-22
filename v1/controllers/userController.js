const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const getUser = async (request, reply) => {
    const { userId, headers } = request;
    return adapters.getUser({
      userId,
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

  const getUserCourses = async (request, reply) => {
    const { userId, headers } = request;
    return adapters.getUserCourses({
      userId,
      headers,
      onSuccess: data => {
        const response = successHandler(data);
        return reply.response(response.courses).code(response.statusCode);
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
    getUserCourses,
  };
};

module.exports = wrapper;
