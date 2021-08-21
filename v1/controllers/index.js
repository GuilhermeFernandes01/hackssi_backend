const factory = require('./factory');
const commons = require('../../commons/utils');
const config = require('../../config');
const useCases = require('../useCases');
const enums = require('../../enums');

const adapters = require('../adapters')({
  commons,
  config,
  useCases,
  enums,
});

module.exports = factory({ adapters, commons, config });
