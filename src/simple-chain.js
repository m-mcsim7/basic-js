const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    this.arr.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      Number.isInteger(position) &&
      0 < position &&
      position < (this.arr.length + 1) &&
      arguments.length == 1 &&
      Number.isSafeInteger(position)
    ) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const arrFinish = this.arr.join("~~");
    this.arr = [];
    return arrFinish;
  },
};

module.exports = {
  chainMaker,
};
