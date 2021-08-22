const {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
  getRanking,
} = require('./routes');

module.exports = [
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
  getRanking,
];
