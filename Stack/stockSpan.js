class StackNode {
  constructor(_val, _index) {
    this.val = _val;
    this.index = _index;
  }
}

var StockSpanner = function () {
  this.stack = [];
  this.i = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  const newStackNode = new StackNode(price, this.i);
  this.i++;

  while (this.stack.length && this.stack[this.stack.length - 1].val <= price)
    this.stack.pop();

  this.stack.push(newStackNode);

  if (this.stack.length === 1) return this.stack[this.stack.length - 1].index;
  return (
    this.stack[this.stack.length - 1].index -
    this.stack[this.stack.length - 2].index
  );
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
