const hapiSwaggeredUI = require('hapi-swaggered-ui');

module.exports = {
  plugin: hapiSwaggeredUI,
  options: {
    auth: false,
    title: 'Swagger UI',
    path: '/docs',
    swaggerOptions: {
      validatorUrl: null,
    },
  },
};
