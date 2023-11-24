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
    debug: false,
  },
});
