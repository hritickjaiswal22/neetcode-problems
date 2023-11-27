function findDifferentBinaryString(nums) {
  const n = nums.length;
  const min = 0;
  const max = 2 ** n - 1;
  const hash = {};

  for (const num of nums) {
    const decimal = parseInt(num, 2);
    hash[decimal] = true;
  }

  while (true) {
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    if (hash[result] === undefined) {
      let arr = Number(result).toString(2).split("");

      while (arr.length < n) arr.unshift("0");

      return arr.join("");
    }
  }
}
