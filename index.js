'use strict';

module.exports = {
  "extends": [
    './core',
    './style'
  ].map(require.resolve),
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true
  }
};
