
const {alias} = require('react-app-rewire-alias');
const path = require('path');
/**
 * 在不eject的情况下，自定义create-react-app 配置
 * @param {webpacka config} config 
 * @param {*} env 
 */
module.exports = {
  webpack: function(config, env) {
    // alias
    alias({
      'src':path.resolve(__dirname,'./src')
    })(config)
    // postcss
    require('react-app-rewire-postcss')(config,{
      plugins:[require('tailwindcss')]
    });
    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest: function(config) {
    // ...add your jest config customisation...
    // Example: enable/disable some tests based on environment variables in the .env file.
    return config;
  },
  // The function to use to create a webpack dev server configuration when running the development
  // server with 'npm run start' or 'yarn start'.
  // Example: set the dev server to use a specific certificate in https.
  devServer: function(configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function(paths, env) {
    // ...add your paths config
    return paths;
  },
}