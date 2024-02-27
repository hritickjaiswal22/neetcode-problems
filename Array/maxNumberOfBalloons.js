function maxNumberOfBalloons(text) {
  const hash = Array(26).fill(0);
  const ballon = {
    a: 1,
    b: 1,
    l: 2,
    n: 1,
    o: 2,
  };
  let result = Number.MAX_SAFE_INTEGER;

  for (const char of text) {
    const asci = char.charCodeAt(0) - 97;

    hash[asci]++;
  }

  for (const key of Object.keys(ballon)) {
    const required = Object.values(key);
    const asci = key.charCodeAt(0) - 97;
    const available = hash[asci];

    if (available < required) return 0;
    result = Math.min(result, Math.floor(available / required));
  }

  return result;
}
