const wrapper = ({
  repository,
}) => {
  const getFormations = async () => repository.trailsCollection.find();

  return {
    getFormations,
  };
};

module.exports = wrapper;
