/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.activeIndex = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  while (this.history.length !== this.activeIndex + 1) this.history.pop();

  this.history.push(url);

  this.activeIndex = this.history.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let newActiveIndex = this.activeIndex - steps;

  if (newActiveIndex < 0) newActiveIndex = 0;

  this.activeIndex = newActiveIndex;

  return this.history[newActiveIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let newActiveIndex = this.activeIndex + steps;

  if (newActiveIndex >= this.history.length)
    newActiveIndex = this.history.length - 1;

  this.activeIndex = newActiveIndex;

  return this.history[newActiveIndex];
};

/**
 * @return {string}
 */
BrowserHistory.prototype.current = function () {
  return this.history[this.activeIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
