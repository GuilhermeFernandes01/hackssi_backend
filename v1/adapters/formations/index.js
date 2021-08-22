const wrapper = ({
  useCases: { trailsUseCases },
}) => {
  const getFormations = async ({
    onSuccess,
    onError,
  }) => {
    try {
      const formations = await trailsUseCases.getFormations();

      return onSuccess({ formations });
    } catch (error) {
      return onError(error);
    }
  };


  return {
    getFormations,
  };
};

module.exports = wrapper;
