const wrapper = ({
  useCases: { rankingUseCases },
}) => {
  const addUserPoints = async ({
    onSuccess,
    onError,
  }) => {
    try {
      const formations = await rankingUseCases.addUserPoints();

      return onSuccess({ formations });
    } catch (error) {
      return onError(error);
    }
  };

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
    addUserPoints,
    getRanking,
  };
};

module.exports = wrapper;
