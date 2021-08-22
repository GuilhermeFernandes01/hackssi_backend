const factory = require('./factory');
const mongo = require('../../../commons/lib/mongoDb');
const config = require('../../../config');

const usersCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.users,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

const tokensCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.tokens,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

const usersCoursesCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.usersCourses,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

const coursesCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.courses,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

const trailsCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.formations,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

const rankingCollection = factory({
  db: mongo,
  collectionName: config.mongo.collections.ranking,
  configConnection: {
    host: config.mongo.host,
    database: config.mongo.database,
  },
});

module.exports = {
  usersCollection,
  tokensCollection,
  usersCoursesCollection,
  coursesCollection,
  trailsCollection,
  rankingCollection,
};
