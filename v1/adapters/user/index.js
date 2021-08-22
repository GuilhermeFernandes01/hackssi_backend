const wrapper = ({
  enums: { USER },
  useCases: { userUseCases },
}) => {
  const getUser = async ({
    params,
    onSuccess,
    onError,
  }) => {
    try {
      const { id } = params;

      const user = await userUseCases.getUserById(id);

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
    onSuccess,
    onError,
  }) => {
    try {
      const response = await userUseCases.getUserCourses(userId);

      return onSuccess(response);
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
