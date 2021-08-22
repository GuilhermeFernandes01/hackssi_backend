const UUID = require('uuid');

module.exports = ({ db, collectionName, configConnection }) => ({
  insertOne: async item => {
    const collection = await db.collection(collectionName, configConnection);
    const { ops: [data] } = await collection.insertOne({ _id: UUID('v4'), ...item });
    return data;
  },
  findWithPagination: async (skip = 0, limit = 10) => {
    const collection = await db.collection(collectionName, configConnection);
    const data = await collection.find().skip(skip).limit(limit).toArray();
    return data;
  },
  findOne: async (filter, options = {}) => {
    const collection = await db.collection(collectionName, configConnection);
    const data = await collection.findOne(filter, options);
    return data;
  },
  deleteOne: async filter => {
    const collection = await db.collection(collectionName, configConnection);
    const data = await collection.deleteOne(filter);
    return data;
  },
});
