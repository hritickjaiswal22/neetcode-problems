class TimeValue {
  constructor(_val, _time) {
    this.val = _val;
    this.time = _time;
  }
}

var TimeMap = function () {
  this.hash = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  const obj = new TimeValue(value, timestamp);

  if (this.hash[key]) this.hash[key].push(obj);
  else this.hash[key] = [obj];
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const arr = this.hash[key];
  if (!arr) return "";
  let low = 0;
  let high = arr.length - 1;
  let resultIndex = 0;

  if (arr[0].time > timestamp) return "";

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid].time <= timestamp && mid > resultIndex) resultIndex = mid;

    if (arr[mid].time <= timestamp) low = mid + 1;
    else high = mid - 1;
  }

  return arr[resultIndex].val;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
