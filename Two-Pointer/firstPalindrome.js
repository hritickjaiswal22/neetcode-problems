function firstPalindrome(words) {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }

  return "";
}

function isPalindrome(str) {
  const temp = str.split("").reverse().join("");

  return temp === str;
}
