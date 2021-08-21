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

  return {
    getUser,
    createUser,
  };
};

module.exports = wrapper;
