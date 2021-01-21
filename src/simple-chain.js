const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  count: 0,
  val : [],
  getLength() {
    this.count = this.val.length;
    return this.count;
  },
  addLink(value) {
    this.val.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.val.length) 
    { this.chain = '';
      this.val = [];
      throw 'THROWN';
    }
    this.val.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain = '';
    this.val.reverse();;
    return this;
  },
  finishChain() {
    for (let i =0; i < this.val.length; i++){
      this.chain += `( ${this.val[i]} )~~`;
    }
    let res = this.chain.slice(0,-2);
    this.chain = '';
    this.val = [];
    return res;
  }
};

module.exports = chainMaker;
