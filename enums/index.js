const enums = {
  USER: {
    SUCCESS: {
      CREATED_SUCCESSFULLY: 'User created successfully',
    },
    ERROR: {
      NOT_FOUND: 'User not found',
      ALREADY_EXISTS: 'User already exists',
    },
  },
};

module.exports = Object.freeze(enums);
