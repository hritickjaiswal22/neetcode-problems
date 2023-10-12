var MinStack = function () {
  this.stack = [];
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (!this.arr.length) this.arr.push(val);
  else this.arr.push(Math.min(this.arr[this.arr.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop();

  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
