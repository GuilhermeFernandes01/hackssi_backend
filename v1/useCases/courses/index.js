const wrapper = ({
  repository,
}) => {
  const getCourses = async () => repository.coursesCollection.find();

  return {
    getCourses,
  };
};

module.exports = wrapper;
