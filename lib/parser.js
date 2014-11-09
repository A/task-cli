'use strict';

module.exports = function parse(str, memo) {
  memo = memo || {};
  if (!~str.indexOf(':')) { return memo; }
  var regexp = new RegExp(/([A-Za-z\-\_]+):([^:]+)(?!.*:)/g);
  return parse(str.replace(regexp, function(_, param, value) {
    memo[param] = value.trim();
    return ''; // remove matched param
  }), memo);
};
