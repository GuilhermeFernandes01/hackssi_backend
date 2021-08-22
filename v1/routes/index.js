const {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
} = require('./routes');

module.exports = [
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
];
