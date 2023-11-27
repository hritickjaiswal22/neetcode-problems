function restoreIpAddresses(s) {
  function isValid(i, j) {
    if (j < i) return false;

    if (j - i + 1 === 1) return true;
    if (j - i + 1 > 1) {
      if (s[i] === "0") return false;

      let str = "";

      for (let k = i; k <= j; k++) {
        str += s[k];
      }

      if (Number(str) > 0 && Number(str) <= 255) return true;
    }
    return false;
  }

  function find(i, temp) {
    if (temp.length === 3) {
      if (isValid(temp[2] + 1, s.length - 1)) {
        result.push(temp);
      }
      return;
    }
    if (i >= s.length) return;

    let str = "";
    let j = i;

    while (j < s.length && j < j + 3) {
      str += s[j];

      if (isValid(i, j)) {
        find(j + 1, [...temp, j]);
      }
      j++;
    }
  }

  const result = [];
  const result2 = [];

  find(0, []);

  for (const arr of result) {
    let i = 0;
    let str = "";

    while (i < s.length && arr.length) {
      str += s[i];
      if (i === arr[0]) {
        str += ".";
        arr.shift();
      }
      i++;
    }

    str += s.substring(i);
    result2.push(str);
  }

  return result2;
}

restoreIpAddresses("0000");
