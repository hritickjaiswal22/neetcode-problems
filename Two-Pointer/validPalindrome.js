function validPalindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      const jRemovedSubstring = s.substring(i, j);
      const iRemovedSubstring = s.substring(i + 1, j + 1);
      let temp = jRemovedSubstring;

      if (jRemovedSubstring === temp.split("").reverse().join("")) return true;
      temp = iRemovedSubstring;
      if (iRemovedSubstring === temp.split("").reverse().join("")) return true;

      return false;
    }
    i++;
    j--;
  }

  return true;
}
