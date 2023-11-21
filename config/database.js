// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST_DEV"),
      port: env.int("DATABASE_PORT_DEV"),
      database: env("DATABASE_NAME_DEV"),
      user: env("DATABASE_USERNAME_DEV"),
      password: env("DATABASE_PASSWORD_DEV"),
      schema: env("DATABASE_SCHEMA_DEV", "public"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 4,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
    debug: false,
  },
});
