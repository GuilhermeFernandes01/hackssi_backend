const { hash, compare } = require('bcryptjs');
const { addDays } = require('date-fns');
const { sign } = require('jsonwebtoken');
const factory = require('./factory');
const repository = require('../repository/mongoDb');
const CustomError = require('../../commons/utils/CustomError');
const enums = require('../../enums');
const { token } = require('../../config');

const dependencies = {
  repository,
  hash,
  compare,
  sign,
  CustomError,
  enums,
  token,
  addDays,
};

module.exports = factory(dependencies);
