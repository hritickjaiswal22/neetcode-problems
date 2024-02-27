/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefix = [];
  let sum = 0;

  for (const num of nums) {
    sum += num;

    this.prefix.push(sum);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let result = this.prefix[right];

  if (left - 1 >= 0) result -= this.prefix[left - 1];

  return result;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
