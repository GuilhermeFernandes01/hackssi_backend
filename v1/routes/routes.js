const controller = require('../controllers');
const { userSchema } = require('../schemas');

const getUser = {
  path: '/v1/users/{id}',
  method: 'GET',
  config: {
    description: 'Busca um usuário',
    notes: ' ',
    tags: ['api'],
    handler: controller.getUser,
    validate: {
      options: {
        allowUnknown: true,
      },
      params: userSchema.getUser.params,
      headers: userSchema.getUser.headers,
    },
  },
};

const createUser = {
  path: '/v1/users',
  method: 'POST',
  config: {
    description: 'Cria um usuário',
    notes: ' ',
    tags: ['api'],
    handler: controller.createUser,
    validate: {
      options: {
        allowUnknown: true,
      },
      payload: userSchema.createUser.payload,
      headers: userSchema.createUser.headers,
    },
  },
};

module.exports = {
  getUser,
  createUser,
};
