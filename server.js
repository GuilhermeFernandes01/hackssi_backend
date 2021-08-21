const Hapi = require('@hapi/hapi');
const joi = require('joi');

const config = require('./config');
const routes = require('./v1/routes');
const plugins = require('./plugins');

module.exports = (async () => {
  const server = Hapi.server({ address: config.app.address, port: config.app.port, router: { isCaseSensitive: false } });

  server.validator(joi);
  server.route(routes);

  await server.register(plugins);
  return server;
})();
