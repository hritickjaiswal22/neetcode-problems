// function findDifferentBinaryString(nums) {
//   const n = nums.length;
//   const min = 0;
//   const max = 2 ** n - 1;
//   const hash = {};

//   for (const num of nums) {
//     const decimal = parseInt(num, 2);
//     hash[decimal] = true;
//   }

//   while (true) {
//     const result = Math.floor(Math.random() * (max - min + 1) + min);

//     if (hash[result] === undefined) {
//       let arr = Number(result).toString(2).split("");

//       while (arr.length < n) arr.unshift("0");

//       return arr.join("");
//     }
//   }
// }

function addPadding(str, n) {
  while (str.length !== n) str = "0" + str;

  return str;
}

function findDifferentBinaryString(nums) {
  const n = nums.length;
  const hash = {};
  const min = 0;
  const max = 2 ** n - 1;

  for (const bin of nums) {
    const num = parseInt(bin, 2);
    hash[num] = true;
  }

  while (true) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!hash[randomNumber]) {
      const result = randomNumber.toString(2);
      return addPadding(result, n);
    }
  }
}
