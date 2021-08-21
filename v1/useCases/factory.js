const userWrapper = require('./user/mongoDb');

module.exports = dependencies => ({
  userUseCases: {
    listUsers: userWrapper(dependencies).listUsers,
    getUserById: userWrapper(dependencies).getUserById,
    createUser: userWrapper(dependencies).createUser,
  },
});
