module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "API",
      script    : "app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },

    // Second application
    {
      name      : "WEB",
      script    : "web.js"
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "ubuntu",
      host : "tercio.me",
      ref  : "origin/master",
      repo : "git@github.com:terciodemelo/tercio.me.git",
      path : "/var/www/production",
      "pre-deploy": "echo $PATH",
      "post-deploy" : "npm install && npm run build"
    },
  }
}
