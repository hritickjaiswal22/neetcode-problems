function canReach(s, minJump, maxJump) {
  function find(i) {
    if (i >= n || s[i] === "1") return false;
    if (i === n - 1) return true;
    if (t[i] !== null) return t[i];

    let result = false;

    for (let j = Math.min(i + maxJump, n - 1); j >= i + minJump; j--) {
      result = result || find(j);
      if (result) {
        t[j] = true;
        return true;
      }
    }

    return (t[i] = result);
  }
  const n = s.length;
  const t = Array(n + 1).fill(null);

  if (s[n - 1] === "1") return false;

  return find(0);
}
