const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
   let summ = 0;
   let arr1 = [];
   for (let k = 0; k < matrix[0].length; k++) {
     arr1 = [];
 
     for (let i = 0; i < matrix.length; i++) {
       arr1.push(matrix[i][k]);
     }
     for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== 0) {
         summ = summ + arr1[i];
       } else {
         
         break;
       }
       
     }
   }
   return summ
}

module.exports = {
  getMatrixElementsSum
};
