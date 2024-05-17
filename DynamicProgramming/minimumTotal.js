function minimumTotal(triangle) {
  const n = triangle.length;
  let t = triangle[n - 1];
  let i = n - 1;

  while (i > 1) {
    const arr = triangle[i - 1];
    const temp = [];

    for (let j = 0; j < arr.length; j++) {
      temp.push(arr[j] + Math.min(t[j], t[j + 1]));
    }

    t = temp;
    i--;
  }

  return t[0];
}
