const userWrapper = require('./user');
const { authenticateWrapper } = require('./auth');
const coursesWrapper = require('./courses');

module.exports = dependencies => ({
  userUseCases: {
    listUsers: userWrapper(dependencies).listUsers,
    getUserById: userWrapper(dependencies).getUserById,
    createUser: userWrapper(dependencies).createUser,
    getUserCourses: userWrapper(dependencies).getUserCourses,
  },
  authenticationUseCases: {
    authenticateUser: authenticateWrapper(dependencies).authenticateUser,
  },
  coursesUseCases: {
    getCourses: coursesWrapper(dependencies).getCourses,
  },
});
