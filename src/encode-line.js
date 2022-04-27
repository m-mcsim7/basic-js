const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
   const arr2 = [];
   const arr = str.split("");
   let coint = 1;
   for (let i = 0; i < arr.length; i++) {
         if (arr[i] === arr[i + 1]) {
       coint = coint +1;
     }
     
     else{
        if (coint > 1) {
          arr2.push(coint, arr[i])
          coint = 1
        } 
        else {
           coint = 1
          arr2.push(coint, arr[i]);
        } 
     }
   }
   return arr2.join("").replace(/1/g, "");
}

module.exports = {
  encodeLine
};
