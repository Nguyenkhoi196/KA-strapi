export default ({ env }) => ({
  url: env('STRAPI_URL', "https://khoianh-strapi.onrender.com"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
  admin: {
    // ...
    path: '/admin',
    build: {
      backend: env('STRAPI_URL', 'https://khoianh-strapi.onrender.com'),
    },
  },
});
