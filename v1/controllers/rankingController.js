const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
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
    getRanking,
  };
};

module.exports = wrapper;
