const Joi = require('joi');

module.exports = {
  getCourses: {
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
      authorization: Joi.string().required(),
    }),
  },
};
