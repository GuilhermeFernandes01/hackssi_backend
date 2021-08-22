if (process.env.ENVIRONMENT !== 'prd') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

module.exports = {
  app: {
    port: process.env.PORT,
    address: process.env.APP_URL,
  },
  mongo: {
    host: process.env.MONGO_URI,
    database: process.env.MONGO_DB_DATABASE,
    collections: {
      users: process.env.USERS_COLLECTION,
      tokens: process.env.TOKENS_COLLECTION,
      usersCourses: process.env.USERS_COURSES_COLLECTION,
      courses: process.env.COURSES_COLLECTION,
      formations: process.env.FORMATIONS_COLLECTION,
      ranking: process.env.RANKING_COLLECTION,
    },
  },
  plugins: {
    swagger: Object.is(process.env.SWAGGER, 'true'),
    environment: process.env.ENVIRONMENT,
  },
  token: {
    secret: process.env.SECRET_TOKEN,
    expiresIn: Number(process.env.EXPIRES_IN_TOKEN),
  },
};
