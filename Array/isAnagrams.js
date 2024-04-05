// Redo Done
function isAnagram(s, t) {
  const hash1 = Array(26).fill(0);
  const hash2 = Array(26).fill(0);

  for (const char of s) {
    const asci = char.charCodeAt(0) - 97;
    hash1[asci]++;
  }

  for (const char of t) {
    const asci = char.charCodeAt(0) - 97;
    hash2[asci]++;
  }

  for (let i = 0; i < 26; i++) {
    if (hash1[i] !== hash2[i]) return false;
  }

  return true;
}
