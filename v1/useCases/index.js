const { hash } = require('bcryptjs');
const factory = require('./factory');
const repository = require('../repository/mongoDb');
const CustomError = require('../../commons/utils/CustomError');
const enums = require('../../enums');

const dependencies = {
  repository,
  hash,
  CustomError,
  enums,
};

module.exports = factory(dependencies);
