const { token: { secret } } = require('../../config');
const { USER, TOKEN: { NAME, SCHEMA, ALGORITHM } } = require('../../enums');
const repository = require('../../v1/repository/mongoDb');
const CustomError = require('../utils/CustomError');

const options = {
  key: secret,
  validate: async (decoded, request) => {
    const user = await repository.usersCollection.findOne({ _id: decoded.sub }, { projection: { password: 0 } });

    if (!user) {
      throw new CustomError({
        statusCode: 404,
        message: USER.ERROR.NOT_FOUND,
      });
    }

    request.userId = user._id;

    return {
      isValid: true,
    };
  },
  verifyOptions: {
    algorithms: [ALGORITHM],
  },
};

module.exports = {
  name: NAME,
  schema: SCHEMA,
  options,
};
