function splitListToParts(head, k) {
  let n = 0;
  let temp = head;
  const result = [];

  while (temp) {
    n++;
    temp = temp.next;
  }

  if (k >= n) {
    const extra = k - n;
    for (let i = 1; i <= n; i++) {
      result.push(1);
    }
    for (let i = 1; i <= extra; i++) {
      result.push(0);
    }
  } else {
    const nodesNo = Math.floor(n / k);
    const rem = n % k;
    for (let i = 0; i <= k; i++) {
      result.push(nodesNo);
    }
    for (let i = 0; i < rem; i++) {
      result[i]++;
    }
  }

  temp = head;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0) result[i] = [null];
    else {
      const head = temp;
      let k = 0;
      const nodes = result[i];
      let prev = head;

      while (temp && k < nodes) {
        k++;
        prev = temp;
        temp = temp.next;
      }
      prev.next = null;

      result[i] = [head];
    }
  }

  return result;
}
