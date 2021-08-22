const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const getCourses = async (request, reply) => {
    const { userId, headers } = request;
    return adapters.getCourses({
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
    getCourses,
  };
};

module.exports = wrapper;
