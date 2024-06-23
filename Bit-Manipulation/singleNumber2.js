function singleNumber(nums) {
  let xor = 0;
  let odd = 0;
  let even = 0;

  for (const num of nums) {
    xor ^= num;
  }

  const lsb = xor & (-1 * xor);

  for (const num of nums) {
    if (lsb & num) odd ^= num;
    else even ^= num;
  }

  return [odd, even];
}
