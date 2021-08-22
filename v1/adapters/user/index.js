const wrapper = ({
  enums: { USER },
  useCases: { userUseCases },
}) => {
  const getUser = async ({
    userId,
    onSuccess,
    onError,
  }) => {
    try {
      const user = await userUseCases.getUserById(userId);

      return onSuccess(user);
    } catch (error) {
      return onError(error);
    }
  };

  const createUser = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      await userUseCases.createUser(payload);

      return onSuccess({ message: USER.SUCCESS.CREATED_SUCCESSFULLY, statusCode: 201 });
    } catch (error) {
      return onError(error);
    }
  };

  const getUserCourses = async ({
    userId,
    query,
    onSuccess,
    onError,
  }) => {
    try {
      const courses = await userUseCases.getUserCourses(userId, query);

      return onSuccess({ courses });
    } catch (error) {
      return onError(error);
    }
  };


  return {
    getUser,
    createUser,
    getUserCourses,
  };
};

module.exports = wrapper;
