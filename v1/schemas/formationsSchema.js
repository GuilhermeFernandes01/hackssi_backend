const Joi = require('joi');

module.exports = {
  getFormations: {
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
    }),
  },
};
