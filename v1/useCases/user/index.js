const convertToNumber = ({ skipValue, limitValue }) => ({ skip: Number(skipValue) || 0, limit: Number(limitValue) || 10 });

const wrapper = ({
  repository,
  CustomError,
  hash,
  enums: { USER, USER_COURSES },
}) => {
  const listUsers = (skipValue, limitValue) => {
    const { skip, limit } = convertToNumber({ skipValue, limitValue });

    return repository.usersCollection.find(skip, limit);
  };

  const getUserById = async id => {
    const user = await repository.usersCollection.findOne({ _id: id }, { projection: { password: 0 } });

    if (!user) {
      throw new CustomError({
        statusCode: 404,
        message: USER.ERROR.NOT_FOUND,
      });
    }

    return user;
  };

  const createUser = async payload => {
    const userExists = await repository.usersCollection.findOne({ email: payload.email });

    if (userExists) {
      throw new CustomError({
        statusCode: 400,
        message: USER.ERROR.ALREADY_EXISTS,
      });
    }

    const passwordHash = await hash(payload.password, 8);

    const user = {
      ...payload,
      password: passwordHash,
    };

    await repository.usersCollection.insertOne(user);
  };

  const getUserCourses = async userId => {
    const userCourses = await repository.usersCoursesCollection.find({ userId });

    if (!userCourses) {
      throw new CustomError({
        statusCode: 404,
        message: USER_COURSES.ERROR.NOT_FOUND,
      });
    }

    return userCourses;
  };

  return {
    listUsers,
    getUserById,
    createUser,
    getUserCourses,
  };
};

module.exports = wrapper;
