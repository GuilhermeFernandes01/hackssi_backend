const Joi = require('joi');

module.exports = {
  getRanking: {
    query: Joi.object({
      skip: Joi.string(),
      limit: Joi.string(),
    }),
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
    }),
  },
};
