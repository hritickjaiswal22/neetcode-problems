/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
// function flatten(arr) {
//   const result = [];

//   console.log(arr)
//   console.log(arr.getList())

// //   for (const val of arr) {
// //     console.log(val);
// //   }

//   return result;
// }
function flatten(list) {
  if (list.isInteger()) return [list.getInteger()];

  const arr = list.getList();
  const result = [];

  for (const val of arr) {
    const temp = flatten(val);
    result.push(...temp);
  }

  return result;
}
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.list = [];
  for (const val of nestedList) {
    const temp = flatten(val);
    this.list.push(...temp);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.currentIndex !== this.list.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  if (this.hasNext()) {
    const val = this.list[this.currentIndex];
    this.currentIndex++;

    return val;
  }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
