require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
  },
  mongo: {
    host: process.env.MONGO_URI,
    database: process.env.MONGO_DB_DATABASE,
    collections: {
      users: process.env.USERS_COLLECTION,
    },
  },
  plugins: {
    swagger: Object.is(process.env.SWAGGER, 'true'),
    environment: process.env.ENVIRONMENT,
  },
};
