const factory = require('./factory');
const mongo = require('../../../commons/lib/mongodb');
const config = require('../../../config');

const usersCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.users,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

module.exports = {
  usersCollection,
};
