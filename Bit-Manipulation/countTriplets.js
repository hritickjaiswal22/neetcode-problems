function countTriplets(arr) {
  const n = arr.length;
  const preprossedXOR = Array(n).fill(null);
  const prefix = [arr[0]];
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    const temp = {};
    let xor = 0;

    for (let j = i; j < n; j++) {
      xor = xor ^ arr[j];

      if (temp[xor]) temp[xor]++;
      else temp[xor] = 1;
    }

    preprossedXOR[i] = temp;
  }

  for (let i = 1; i < n; i++) {
    prefix.push(prefix[i - 1] ^ arr[i]);
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = prefix[j - 1] ^ (i - 1 >= 0 ? prefix[i - 1] : 0);

      const hash = preprossedXOR[j];
      if (hash[a]) result += hash[a];
    }
  }

  return result;
}
