const hapiSwaggered = require('hapi-swaggered');
const { version } = require('../../package.json');

const configs = {
  plugin: hapiSwaggered,
  options: {
    auth: false,
    info: {
      title: 'API',
      description: 'Swagger',
      version,
    },
  },
};

module.exports = configs;
