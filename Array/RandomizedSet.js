var RandomizedSet = function () {
  this.set = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const truth = this.set[val];

  this.set[val] = true;

  return !truth;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const truth = this.set[val];

  delete this.set[val];

  return !!truth;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const keys = Object.keys(this.set);

  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
