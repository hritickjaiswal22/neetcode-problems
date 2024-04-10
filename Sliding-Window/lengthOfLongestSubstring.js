// function lengthOfLongestSubstring(s) {
//   let i = -1;
//   let j = 0;
//   const hash = {};
//   let result = 0;

//   while (j < s.length) {
//     while (j < s.length) {
//       if (hash[s[j]]) hash[s[j]]++;
//       else hash[s[j]] = 1;

//       if (hash[s[j]] === 2) break;

//       result = Math.max(result, j - i);
//       j++;
//     }

//     while (i < j) {
//       i++;

//       hash[s[i]]--;

//       if (hash[s[i]] === 1) break;
//     }
//   }

//   return result;
// }

function lengthOfLongestSubstring(s) {
  let result = 0;
  let i = -1;
  let j = 0;
  const hash = {};

  while (j < s.length) {
    while (j < s.length) {
      const char = s[j];

      if (hash[char] === undefined) hash[char] = 0;
      hash[char]++;

      if (hash[char] === 2) break;

      result = Math.max(result, j - i);
      j++;
    }

    while (i < j) {
      i++;
      const char = s[i];

      hash[char]--;

      if (hash[char] === 1) {
        j++;
        break;
      }
    }
  }

  return result;
}
