const {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
} = require('./routes');

module.exports = [
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
];
