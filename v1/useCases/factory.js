const userWrapper = require('./user/mongoDb');
const { authenticateWrapper } = require('./auth');

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
});
