const authenticationController = require('./authenticationController');
const coursesController = require('./coursesController');
const userController = require('./userController');

module.exports = (adapters, commons, config) => ({
  getUser: userController(adapters, commons, config).getUser,
  createUser: userController(adapters, commons, config).createUser,
  authenticateUser: authenticationController(adapters, commons, config).authenticateUser,
  getUserCourses: userController(adapters, commons, config).getUserCourses,
  getCourses: coursesController(adapters, commons, config).getCourses,
});
