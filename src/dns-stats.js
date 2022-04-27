const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let returnObj = {};
  const arr = domains.map((e) => e.split("."));
  for (let i = 0; i < arr.length; i++) {
    arr[i][arr[i].length - 1] = "." + arr[i][arr[i].length - 1];
    arr[i].reverse();

    for (let k = 0; k < arr[i].length; k++) {
      const key = arr[i].slice(0, k + 1).join(".");
      returnObj[key] = returnObj.hasOwnProperty(key) ? returnObj[key] + 1 : 1;
    }
  }
  return returnObj;
}

module.exports = {
  getDNSStats,
};
