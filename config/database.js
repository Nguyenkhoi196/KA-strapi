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
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
  },
});
