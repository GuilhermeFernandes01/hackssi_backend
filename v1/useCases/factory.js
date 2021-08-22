const userWrapper = require('./user');
const { authenticateWrapper } = require('./auth');
const coursesWrapper = require('./courses');
const trailsWrapper = require('./formations');
const rankingWrapper = require('./ranking');

module.exports = dependencies => ({
  userUseCases: {
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
  trailsUseCases: {
    getFormations: trailsWrapper(dependencies).getFormations,
  },
  rankingUseCases: {
    getRanking: rankingWrapper(dependencies).getRanking,
  },
});
