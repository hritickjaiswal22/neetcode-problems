Array.prototype.groupBy = function (fn) {
  const arr = this;
  const result = {};

  for (const inp of arr) {
    const key = fn(inp);

    if (result[key]) result[key].push(inp);
    else result[key] = [inp];
  }

  return result;
};
