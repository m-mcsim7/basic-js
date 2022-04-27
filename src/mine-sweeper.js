const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
   const arr = matrix.flat();
   const delta = matrix[0].length;
   const arrResult = [];
   for (let i = 0; i < arr.length; i++) {
     let sum = 0;
 
     if (arr[i - delta - 1] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i - delta] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i - delta + 1] && (i - delta + 1 != 0) === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i - 1] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i + 1] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i + delta - 1] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i + delta] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
     if (arr[i + delta + 1] === true) {
       sum = sum + 1;
     } else {
       sum = sum + 0;
     }
 
     arrResult.push(sum);
 
   }
   const result = [];
   for (i = 0; i < arrResult.length; i = i + 3) {
    result.push(arrResult.slice(i, i + delta));
   }
   return result
}

module.exports = {
  minesweeper
};
