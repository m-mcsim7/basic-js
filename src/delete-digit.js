const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let arrN = (n + '').split('')
   const arrS = []
   for ( let i = 0; i <= arrN.length; i++){
      console.log(i)
      arrN = (n + '').split('')
      arrN.splice(i,1)
      arrS.push(+arrN.join(""))
   }
   return Math.max(...arrS)
}

module.exports = {
  deleteDigit
};
