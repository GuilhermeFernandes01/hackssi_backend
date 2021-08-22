const Hapi = require('@hapi/hapi');
const joi = require('joi');

const config = require('./config');
const routes = require('./v1/routes');
const plugins = require('./plugins');
const { name, schema, options } = require('./commons/strategies/ensureAuthenticated');

module.exports = (async () => {
  const server = Hapi.server({ port: config.app.port, router: { isCaseSensitive: false } });

  server.validator(joi);
  server.route(routes);

  await server.register(plugins);

  server.auth.strategy(name, schema, options);

  server.auth.default(name);

  return server;
})();
