const userWrapper = require('./user');

module.exports = dependencies => ({
  getUser: userWrapper(dependencies).getUser,
  createUser: userWrapper(dependencies).createUser,
});
