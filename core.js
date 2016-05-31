'use strict';

module.exports = {
  "extends": [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/variables'
  ].map(require.resolve),
  "parserOptions": {
    "ecmaVersion": 6,
  }
};
