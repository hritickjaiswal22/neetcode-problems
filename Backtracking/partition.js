function partition(s) {
  function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }

    return true;
  }

  function find(i, temp) {
    if (i >= s.length) {
      result.push(temp);
      return;
    }

    let str = "";

    for (let j = i; j < s.length; j++) {
      str += s[j];
      if (isPalindrome(str)) find(j + 1, [...temp, str]);
    }
  }

  const result = [];

  find(0, []);

  return result;
}
