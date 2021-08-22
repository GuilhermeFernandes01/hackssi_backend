const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const addUserPoints = async (request, reply) => {
    const { userId, query, headers } = request;
    return adapters.addUserPoints({
      userId,
      query,
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

  const getRanking = async (request, reply) => {
    const { query, headers } = request;
    return adapters.getRanking({
      query,
      headers,
      onSuccess: data => {
        const response = successHandler(data);
        return reply.response(response.ranking).code(response.statusCode);
      },
      onError: error => {
        const errorObject = errorHandler(error);
        return reply.response(errorObject).code(errorObject.statusCode);
      },
    });
  };

  return {
    addUserPoints,
    getRanking,
  };
};

module.exports = wrapper;
