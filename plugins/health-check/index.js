const hapiAlive = require('hapi-alive');
const { version } = require('../../package.json');

module.exports =  {
  plugin: hapiAlive,
  options: {
    auth: false,
    path: '/healthcheck',
    tags: ['health', 'monitor'],
    responses: {
      healthy: {
        message: `Version: ${version}`,
      },
      unhealthy: {
        statusCode: 400,
      },
    },
    healthCheck: async () => {
      await true;
    },
  },
};
