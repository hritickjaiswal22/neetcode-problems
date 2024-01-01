function maxUncrossedLines(nums1, nums2) {
  function find(i, prevIndex) {
    if (i >= nums1.length) return 0;
    if (prevIndex >= 0 && t[i][prevIndex] !== null) return t[i][prevIndex];

    let max = 0;

    for (let j = prevIndex + 1; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        max = Math.max(max, 1 + find(i + 1, j));
      }
    }

    max = Math.max(max, find(i + 1, prevIndex));

    if (prevIndex >= 0) t[i][prevIndex] = max;

    return max;
  }

  const t = Array(nums1.length + 1)
    .fill()
    .map((_) => Array(nums2.length + 1).fill(null));

  return find(0, -1);
}
