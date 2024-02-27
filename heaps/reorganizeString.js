function reorganizeString(s) {
  const temp = Array(26).fill(0);
  const hash = [];
  let result = "";

  for (const char of s) {
    const asci = char.charCodeAt(0) - 97;

    temp[asci]++;
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > 0) {
      hash.push({
        char: String.fromCharCode(i + 97),
        val: temp[i],
      });
    }
  }

  hash.sort((a, b) => b.val - a.val);

  while (result.length !== s.length) {
    const len = result.length;

    for (let i = 0; i < hash.length; i++) {
      if (hash[i].val > 0) {
        if (result.length < 1 || result[len - 1] !== hash[i].char) {
          result += hash[i].char;
          hash[i].val--;
          break;
        }
      }
    }

    if (result.length === len) return "";
  }

  return result;
}
