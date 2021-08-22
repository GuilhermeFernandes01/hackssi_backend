const Joi = require('joi');

module.exports = {
  addUserPoints: {
    payload: Joi.object({
      points: Joi.number().max(100),
    }),
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
    }),
  },
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
