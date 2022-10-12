const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.mas.length
  },
  addLink(link) {
    if (link === undefined) {
      this.mas.push(`~~('()')`)
    } else {
      this.mas.push(`~~( ${link} )`)
    }

    return this
  },
  removeLink(link) {
    if (link - 1 < 0 || link > this.mas.length || typeof link !== "number") {
      this.mas = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.mas.splice(+link - 1, 1);
    return this;
  },
  reverseChain() {
    this.mas.reverse();
    return this
  },
  finishChain() {

    let ret = this.mas.join("").startsWith("~~") ? this.mas.join("").slice(2) : this.mas.join("");
    this.mas = [];
    return ret
  },
  mas: []
};

module.exports = {
  chainMaker
};
