module.exports = {
  apps: [
    {
      name: "nuxt-cms",
      script: "build/main.js",
      env: {
        NODE_ENV: "development",
        __ENV: "development",
      },
      env_uat: {
        NODE_ENV: "uat",
        __ENV: "uat",
      },
      env_production: {
        NODE_ENV: "production",
        __ENV: "production",
      },
    },
  ],
};
