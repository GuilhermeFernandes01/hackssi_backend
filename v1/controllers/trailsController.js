const wrapper = ({
  adapters,
  commons: {
    errorHandler,
    successHandler,
  },
}) => {
  const getFormations = async (request, reply) => {
    const { headers } = request;
    return adapters.getFormations({
      headers,
      onSuccess: data => {
        const response = successHandler(data);
        return reply.response(response.formations).code(response.statusCode);
      },
      onError: error => {
        const errorObject = errorHandler(error);
        return reply.response(errorObject).code(errorObject.statusCode);
      },
    });
  };

  return {
    getFormations,
  };
};

module.exports = wrapper;
