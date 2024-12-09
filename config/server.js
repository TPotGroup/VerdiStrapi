module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5001),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL", "http://localhost:5001"),
  proxy: true,
});
