const Joi = require('joi');

const validPeriods = ['morning', 'afternoon', 'night'];

module.exports = {
  getUser: {
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
      authorization: Joi.string().required(),
    }),
  },
  createUser: {
    payload: Joi.object({
      fullName: Joi.string().required(),
      email: Joi.string().email({ tlds: { allow: false } }),
      birthday: Joi.date().required(),
      password: Joi.string().required(),
      hasComputer: Joi.boolean().required(),
      availablePeriods: Joi.object({
        monday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        tueday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        wednesday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        thursday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        friday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        saturday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
        sunday: Joi.array().items(Joi.string().valid(validPeriods)).required(),
      }),
    }),
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
    }),
  },
  authenticateUser: {
    payload: Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().required(),
    }),
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
    }),
  },
  getUserCourses: {
    headers: Joi.object({
      'x-consumer-system': Joi.string().optional(),
      authorization: Joi.string().required(),
    }),
  },
};
