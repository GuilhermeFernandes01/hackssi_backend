const wrapper = ({
  useCases: { authenticationUseCases },
}) => {
  const authenticateUser = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const { email, password } = payload;

      const response = await authenticationUseCases.authenticateUser(email, password);

      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  return {
    authenticateUser,
  };
};

module.exports = wrapper;
