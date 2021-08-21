const userController = require('./userController');

module.exports = (adapters, commons, config) => ({
  getUser: userController(adapters, commons, config).getUser,
  createUser: userController(adapters, commons, config).createUser,
});
