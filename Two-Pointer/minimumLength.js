function minimumLength(s) {
  let i = 0;
  let j = s.length - 1;

  while (s[i] === s[j] && i < j) {
    const commonChar = s[i];

    while (s[i] === commonChar && i < j) i++;
    while (s[j] === commonChar && i < j) j--;

    if (i === j && s[i] === commonChar) return 0;
  }

  return j - i + 1;
}
