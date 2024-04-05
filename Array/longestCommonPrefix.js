// Redo done
/* By sorting and finding smallest and largest we can get O(n) time in comparisson to O(n^2) */

function findLexicographicallySmallest(strings) {
  if (strings.length === 0) return null;

  let smallest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i] < smallest) {
      smallest = strings[i];
    }
  }
  return smallest;
}

function findLexicographicallyLargest(strings) {
  if (strings.length === 0) return null;

  let largest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i] > largest) {
      largest = strings[i];
    }
  }
  return largest;
}

function longestCommonPrefix(strs) {
  const s1 = findLexicographicallySmallest(strs);
  const s2 = findLexicographicallyLargest(strs);

  let result = "";
  for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
    const element = array[i];

    if (s1[i] !== s2[i]) return result;

    result += s1[i];
  }

  return "";
}
