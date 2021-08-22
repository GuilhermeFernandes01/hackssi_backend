const { plugins } = require('../config');

const inert = require('./inert');
const vision = require('./vision');
const healthCheck = require('./health-check');
const hapiSwaggered = require('./hapi-swaggered');
const hapiSwaggeredUI = require('./hapi-swaggered-ui');
const hapiResponseTime = require('./hapi-response-time');
const hapiAuthJwt2 = require('./hapi-auth-jwt2');

module.exports = [
  inert,
  vision,
  healthCheck,
  plugins.swagger ? hapiSwaggered : null,
  plugins.swagger ? hapiSwaggeredUI : null,
  hapiResponseTime,
  hapiAuthJwt2,
].filter(plugin => plugin !== null);
