// class StackNode {
//   constructor(_val, _index) {
//     this.val = _val;
//     this.index = _index;
//   }
// }

// var StockSpanner = function () {
//   this.stack = [];
//   this.i = 0;
// };

// /**
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function (price) {
//   const newStackNode = new StackNode(price, this.i);
//   this.i++;

//   while (this.stack.length && this.stack[this.stack.length - 1].val <= price)
//     this.stack.pop();

//   this.stack.push(newStackNode);

//   if (this.stack.length === 1) return this.stack[this.stack.length - 1].index;
//   return (
//     this.stack[this.stack.length - 1].index -
//     this.stack[this.stack.length - 2].index
//   );
// };

// /**
//  * Your StockSpanner object will be instantiated and called as such:
//  * var obj = new StockSpanner()
//  * var param_1 = obj.next(price)
//  */

class StackNode {
  constructor(_index, _val) {
    this.index = _index;
    this.val = _val;
  }
}

var StockSpanner = function () {
  this.stack = [];
  this.index = 0;

  this.stack.push(new StackNode(-1, Number.MAX_SAFE_INTEGER));
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  while (this.stack.length && price > this.stack[this.stack.length - 1].val)
    this.stack.pop();

  const top = this.stack[this.stack.length - 1];
  const result = this.index - top.index;
  this.stack.push(new StackNode(this.index, price));
  this.index++;

  return result;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
