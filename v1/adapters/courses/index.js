const wrapper = ({
  useCases: { coursesUseCases },
}) => {
  const getCourses = async ({
    onSuccess,
    onError,
  }) => {
    try {
      const courses = await coursesUseCases.getCourses();

      return onSuccess({ courses });
    } catch (error) {
      return onError(error);
    }
  };


  return {
    getCourses,
  };
};

module.exports = wrapper;
