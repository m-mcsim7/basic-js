const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
   const arrReturn = [];
   if (arr === null) {
    return "'arr' parameter must be an instance of the Array!";
  }
   else if (typeof arr === "object" && arr.length > 0) {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i - 2] === "--discard-next") {
         continue;
       } else if (arr[i] === "--discard-next") {
         //  arr[i + 1] = "";
         i += 1;
       } else if (arr[i] === "--discard-prev") {
         arrReturn.splice(-1, 1);
       } else if (arr[i] === "--double-next") {
         arrReturn.push(arr[i + 1]);
       } else if (arr[i] === "--double-prev") {
         arrReturn.push(arr[i - 1]);
       } else {
         arrReturn.push(arr[i]);
       }
     }
     return arrReturn;
   } else {
     return "'arr' parameter must be an instance of the Array!";
   }
}

module.exports = {
  transform,
};
