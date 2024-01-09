// strapi-api/config/database.js
export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST_DEV", "localhost"),
      port: env.int("DATABASE_PORT_DEV", "1337"),
      database: env("DATABASE_NAME_DEV", "KhoiAnh"),
      user: env("DATABASE_USERNAME_DEV", "postgres"),
      password: env("DATABASE_PASSWORD_DEV", "nguyenkhoi196"),
      schema: env("DATABASE_SCHEMA", "public"),
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 5,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 2000
    },
    debug: false,
  },
});
