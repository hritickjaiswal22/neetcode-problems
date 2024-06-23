var TimeLimitedCache = function () {
  this.hash = {};
};

TimeLimitedCache.prototype.romoveExpired = function () {
  const keys = Object.keys(this.hash);

  for (const key of keys) {
    const obj = this.hash[key];

    if (Date.now() > obj.endTime) delete this.hash[key];
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  this.romoveExpired();

  let result = false;

  if (this.hash[key]) result = true;

  const startTime = Date.now();

  this.hash[key] = {
    startTime,
    value,
    endTime: startTime + duration,
  };

  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  this.romoveExpired();

  const result = this.hash[key];

  if (result) return result.value;

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  this.romoveExpired();

  return Object.keys(this.hash).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
