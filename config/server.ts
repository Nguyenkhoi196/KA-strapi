export default ({ env }) => ({
  url: env("PUBLIC_URL", "http://localhost:1337"),
  host: "127.0.0.1",
  port: env.int("PORT_DEV", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // admin: {
  //   url: '/',
  //   serverAdminPanel: false,
  // }
  admin: {
    // ...
    path: '/admin',
    build: {
      backend: env('STRAPI_URL', 'https://khoianh-strapi.onrender.com'),
    },
  },
});
