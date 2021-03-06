const userWrapper = require('./user');
const authWrapper = require('./auth');
const coursesWrapper = require('./courses');
const trailsWrapper = require('./formations');
const rankingWrapper = require('./ranking');

module.exports = dependencies => ({
  getUser: userWrapper(dependencies).getUser,
  createUser: userWrapper(dependencies).createUser,
  authenticateUser: authWrapper(dependencies).authenticateUser,
  getUserCourses: userWrapper(dependencies).getUserCourses,
  getCourses: coursesWrapper(dependencies).getCourses,
  getFormations: trailsWrapper(dependencies).getFormations,
  getRanking: rankingWrapper(dependencies).getRanking,
});
