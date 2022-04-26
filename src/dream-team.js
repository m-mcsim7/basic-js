const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
   const returnArr = [];
   if (arr === null) {
     return false;
   } else if (typeof arr === "object" && arr.length > 0) {
     for (let i of arr) {
        console.log(i)
       if (typeof i === "string") {
         i = i.trim();
         returnArr.push(i[0].toUpperCase());
       }
     }
     console.log(returnArr)
     if (returnArr.length > 0) {
       return returnArr.sort().join("");
     } else {
       return false;
     }
   } else {
     return false;
   }
}

module.exports = {
  createDreamTeam,
};
