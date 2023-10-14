function decodeString(s) {
  function find(low, high) {
    let result = "";

    for (let i = low; i <= high; i++) {
      const asci = getAsciiValue(s[i]);

      if (asci >= 48 && asci <= 57) {
        let j = i;
        let num = "";

        while (
          j <= high &&
          getAsciiValue(s[j]) >= 48 &&
          getAsciiValue(s[j]) <= 57
        ) {
          num += s[j];
          j++;
        }

        const str = find(j + 1, hash[j] - 1);
        num = Number(num);

        for (let i = 1; i <= num; i++) {
          result += str;
        }

        i = hash[j];
      } else result += s[i];
    }

    return result;
  }

  const stack = [];
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") stack.push(i);
    if (s[i] === "]") {
      hash[stack.pop()] = i;
    }
  }

  return find(0, s.length - 1);
}

function getAsciiValue(char) {
  return char.charCodeAt(0);
}
