const hapiResponsetime = require('hapi-response-time');

module.exports = {
  plugin: hapiResponsetime,
  options: {
    path: '/timeout',
    async handler(request, h) {
      await (() => new Promise(resolve => setTimeout(resolve, 10000)))();
      return h.response('Response after 10 seconds');
    },
  },
};
