function maximumRemovals(s, p, removable) {
  let low = 0;
  let high = removable.length;
  let result = 0;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const canBeRemoved = find(mid, s, p, removable);

    if (canBeRemoved) removable = Math.max(result, mid);

    if (canBeRemoved) low = mid + 1;
    else high = mid - 1;
  }

  return result;
}

function find(k, s, p, removable) {
  const set = new Set();
  let temp = "";

  for (let i = 0; i < k; i++) {
    set.add(removable[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) temp += s[i];
  }

  return isSubsequence(p, temp);
}

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) i++;
    j++;
  }

  if (i >= str1.length) return true;
  return false;
}
