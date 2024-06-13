var DetectSquares = function () {
  this.mapX = {};
  this.mapY = {};
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;

  if (!this.mapX[x]) this.mapX[x] = new Set([y]);
  else this.mapX[x].add(y);

  if (!this.mapY[y]) this.mapY[y] = new Set([x]);
  else this.mapY[y].add(x);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x, y] = point;
  const result = {};

  const yArr = this.mapX[x] ? [...this.mapX[x]] : null;
  const xArr = this.mapY[y] ? [...this.mapY[y]] : null;

  if (yArr) {
    for (const Y of yArr) {
      const sideLength = Math.abs(Y - y);

      const leftX = x - sideLength;

      if (
        this.mapX[leftX] &&
        this.mapX[leftX].has(y) &&
        this.mapX[leftX].has(Y)
      )
        result[`${leftX},${y},${Y}`] = true;

      const rightX = x + sideLength;

      if (
        this.mapX[rightX] &&
        this.mapX[rightX].has(y) &&
        this.mapX[rightX].has(Y)
      )
        result[`${rightX},${y},${Y}`] = true;
    }
  }

  if (xArr) {
    for (const X of xArr) {
      const sideLength = Math.abs(X - x);

      const topY = y - sideLength;

      if (this.mapY[topY] && this.mapY[topY].has(X) && this.mapY[topY].has(x))
        result[`${topY},${x},${X}`] = true;

      const bottomY = y + sideLength;

      if (
        this.mapY[bottomY] &&
        this.mapY[bottomY].has(X) &&
        this.mapY[bottomY].has(x)
      )
        result[`${bottomY},${x},${X}`] = true;
    }
  }

  return Object.keys(result).length;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
