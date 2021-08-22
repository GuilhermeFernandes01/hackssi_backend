const enums = {
  USER: {
    SUCCESS: {
      CREATED_SUCCESSFULLY: 'User created successfully',
    },
    ERROR: {
      NOT_FOUND: 'User not found',
      ALREADY_EXISTS: 'User already exists',
      EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect',
    },
  },
  USER_COURSES: {
    ERROR: {
      NOT_FOUND: 'None course found',
    },
  },
  TOKEN: {
    NAME: 'jwt',
    SCHEMA: 'jwt',
    ALGORITHM: 'HS256',
  },
  FORMATION: {
    STATUS: {
      NOT_STARTED: 'not_started',
      IN_PROGRESS: 'in_progress',
      COMPLETED: 'completed',
    },
  },
};

module.exports = Object.freeze(enums);
