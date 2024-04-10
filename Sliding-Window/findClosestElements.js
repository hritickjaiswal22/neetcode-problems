function findClosestElements(arr, k, x) {
  let index = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(x - arr[i]) < minDiff) {
      minDiff = Math.abs(x - arr[i]);
      index = i;
    }
  }

  const left = [];
  const right = [];
  let i = index - 1;
  let j = index + 1;

  right.push(arr[index]);
  k--;

  while (k > 0 && i >= 0 && j < arr.length) {
    if (Math.abs(arr[i] - x) < Math.abs(arr[j] - x)) {
      left.push(arr[i]);
      i--;
      k--;
    } else {
      right.push(arr[j]);
      j++;
      k--;
    }
  }

  while (k > 0 && i >= 0) {
    left.push(arr[i]);
    i--;
    k--;
  }

  while (k > 0 && j < arr.length) {
    right.push(arr[j]);
    j++;
    k--;
  }

  return [...left.reverse(), ...right];
}
