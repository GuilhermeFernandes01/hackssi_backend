const wrapper = ({
  useCases: { rankingUseCases },
}) => {
  const getRanking = async ({
    query,
    onSuccess,
    onError,
  }) => {
    try {
      const { skip, limit } = query;

      const ranking = await rankingUseCases.getRanking(skip, limit);

      return onSuccess({ ranking });
    } catch (error) {
      return onError(error);
    }
  };


  return {
    getRanking,
  };
};

module.exports = wrapper;
