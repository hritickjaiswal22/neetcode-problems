// function findRepeatedDnaSequences(s) {
//   if (s.length <= 10) return [];

//   const hash = {};
//   const arr = s.substring(0, 10).split("");
//   const result = [];

//   hash[arr.join("")] = 1;
//   for (let i = 10; i < s.length; i++) {
//     arr.shift();
//     arr.push(s[i]);

//     const str = arr.join("");
//     if (hash[str]) hash[str]++;
//     else hash[str] = 1;
//   }

//   for (const key of Object.keys(hash)) {
//     if (hash[key] > 1) result.push(key);
//   }

//   return result;
// }

function findRepeatedDnaSequences(s) {
  const hash = {};
  const result = [];

  for (let i = 0; i + 9 < s.length; i++) {
    const temp = s.substring(i, i + 10);

    if (hash[temp]) hash[temp]++;
    else hash[temp] = 1;
  }

  for (const key of Object.keys(hash)) {
    const val = hash[key];
    if (val > 1) result.push(key);
  }

  return result;
}
