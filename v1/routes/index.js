const {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
  addUserPoints,
  getRanking,
} = require('./routes');

module.exports = [
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
  addUserPoints,
  getRanking,
];
