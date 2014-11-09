'use strict';

module.exports = function parse(str, memo) {
  memo = memo || {};
  if (!~str.indexOf(':')) { return memo; }
  return parse(str.replace(/([\w\-\_]+):([^:]+)(?!.*:)/g, function(_, param, value) {
    memo[param] = value.trim();
    return ''; // remove matched param
  }), memo);
};
