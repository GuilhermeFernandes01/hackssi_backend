const userWrapper = require('./user');
const authWrapper = require('./auth');

module.exports = dependencies => ({
  getUser: userWrapper(dependencies).getUser,
  createUser: userWrapper(dependencies).createUser,
  authenticateUser: authWrapper(dependencies).authenticateUser,
  getUserCourses: userWrapper(dependencies).getUserCourses,
});
