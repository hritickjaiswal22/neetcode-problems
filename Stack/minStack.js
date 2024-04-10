// var MinStack = function () {
//   this.stack = [];
//   this.arr = [];
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.stack.push(val);

//   if (!this.arr.length) this.arr.push(val);
//   else this.arr.push(Math.min(this.arr[this.arr.length - 1], val));
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.arr.pop();

//   return this.stack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.arr[this.arr.length - 1];
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

class Item {
  constructor(_val, _min) {
    this.val = _val;
    this.min = _min;
  }
}

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const obj = new Item(val, Number.MAX_SAFE_INTEGER);

  if (this.stack.length === 0) {
    obj.min = val;
  } else {
    obj.min = Math.min(val, this.stack[this.stack.length - 1].min);
  }
  this.stack.push(obj);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
