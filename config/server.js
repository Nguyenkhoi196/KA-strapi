module.exports = ({ env }) => ({
  host: '127.0.0.1',
  port: env.int("PORT_DEV", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
