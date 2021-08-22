const wrapper = ({
  repository,
  CustomError,
  compare,
  sign,
  enums: { USER, TOKEN: { ALGORITHM } },
  token: { expiresIn, secret },
}) => {
  const tokenAuth = payload => sign(payload, secret, { algorithm: ALGORITHM });

  const authenticateUser = async (email, password) => {
    const user = await repository.usersCollection.findOne({ email });

    if (!user) {
      throw new CustomError({
        statusCode: 404,
        message: USER.ERROR.NOT_FOUND,
      });
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new CustomError({
        statusCode: 401,
        message: USER.ERROR.EMAIL_OR_PASSWORD_INCORRECT,
      });
    }

    const tokenExists = await repository.tokensCollection.findOne({
      userId: user._id,
    });

    if (tokenExists) {
      await repository.tokensCollection.deleteOne({
        userId: user._id,
      });
    }

    const jwtData = {
      iss: 'api-hackssi-etech',
      sub: user._id,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
    };

    const token = tokenAuth(jwtData);

    await repository.tokensCollection.insertOne({
      userId: user._id,
      token,
    });

    return {
      user: {
        fullName: user.fullName,
        email: user.email,
      },
      token,
    };
  };

  return {
    authenticateUser,
  };
};

module.exports = wrapper;
