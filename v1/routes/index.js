const {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
} = require('./routes');

module.exports = [
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
];
