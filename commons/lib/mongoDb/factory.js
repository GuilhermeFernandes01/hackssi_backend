const { MongoClient } = require('mongodb');

const factory = state => ({
  async connect(url, dbName) {
    try {
      const client = await MongoClient.connect(url, {
        promiseLibrary: Promise,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      state.db = client.db(dbName);
      return state.db;
    } catch (err) {
      throw new Error(`Mongo failed to connect ${err}`);
    }
  },

  isConnected() {
    return state.db?.serverConfig?.isConnected();
  },

  disconnect() {
    state.db.serverConfig.close();
    state.db = null;
    return state.db;
  },

  async collection(collectionName, configConnection) {
    if (!this.isConnected()) {
      await this.connect(configConnection.host, configConnection.database);
    }

    if (!state.db) {
      throw new Error('There is no connection to the database.');
    }

    return state.db.collection(collectionName);
  },

  db() {
    return state.db;
  },
});

module.exports = factory;
