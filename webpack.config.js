const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... outras configurações do Webpack ...
  plugins: [
    new Dotenv(),
    // ... outros plugins ...
  ],
};
