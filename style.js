'use strict';

module.exports = {
  extends: [
    './rules/stylistic'
  ].map( require.resolve )
};