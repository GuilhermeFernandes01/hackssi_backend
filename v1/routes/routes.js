const controller = require('../controllers');
const { userSchema, coursesSchema, formationsSchema } = require('../schemas');

const getUser = {
  path: '/v1/users',
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
      headers: userSchema.getUser.headers,
    },
  },
};

const createUser = {
  path: '/v1/users',
  method: 'POST',
  config: {
    auth: false,
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

const authenticateUser = {
  path: '/v1/auth/users',
  method: 'POST',
  config: {
    auth: false,
    description: 'Autentica um usuário',
    notes: ' ',
    tags: ['api'],
    handler: controller.authenticateUser,
    validate: {
      options: {
        allowUnknown: true,
      },
      payload: userSchema.authenticateUser.payload,
      headers: userSchema.authenticateUser.headers,
    },
  },
};

const getUserCourses = {
  path: '/v1/users/courses',
  method: 'GET',
  config: {
    description: 'Retorna os cursos de um usuário',
    notes: ' ',
    tags: ['api'],
    handler: controller.getUserCourses,
    validate: {
      options: {
        allowUnknown: true,
      },
      query: userSchema.getUserCourses.query,
      headers: userSchema.getUserCourses.headers,
    },
  },
};

const getCourses = {
  path: '/v1/courses',
  method: 'GET',
  config: {
    auth: false,
    description: 'Retorna os cursos',
    notes: ' ',
    tags: ['api'],
    handler: controller.getCourses,
    validate: {
      options: {
        allowUnknown: true,
      },
      headers: coursesSchema.getCourses.headers,
    },
  },
};

const getFormations = {
  path: '/v1/formations',
  method: 'GET',
  config: {
    auth: false,
    description: 'Retorna as trilhas',
    notes: ' ',
    tags: ['api'],
    handler: controller.getFormations,
    validate: {
      options: {
        allowUnknown: true,
      },
      headers: formationsSchema.getFormations.headers,
    },
  },
};

module.exports = {
  getUser,
  createUser,
  authenticateUser,
  getUserCourses,
  getCourses,
  getFormations,
};
