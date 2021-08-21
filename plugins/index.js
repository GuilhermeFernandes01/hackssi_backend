const { plugins } = require('../config');

const inert = require('./inert');
const vision = require('./vision');
const healthCheck = require('./health-check');
const hapiSwaggered = require('./hapi-swaggered');
const hapiSwaggeredUI = require('./hapi-swaggered-ui');
const hapiResponseTime = require('./hapi-response-time');

module.exports = [
  inert,
  vision,
  healthCheck,
  plugins.swagger ? hapiSwaggered : null,
  plugins.swagger ? hapiSwaggeredUI : null,
  hapiResponseTime,
].filter(plugin => plugin !== null);
