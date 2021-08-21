const hapiSwaggered = require('hapi-swaggered');
const { version } = require('../../package.json');

const configs = {
  plugin: hapiSwaggered,
  options: {
    info: {
      title: 'API',
      description: 'Swagger',
      version,
    },
  },
};

module.exports = configs;
