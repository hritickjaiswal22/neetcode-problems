// function maxUncrossedLines(nums1, nums2) {
//   function find(i, prevIndex) {
//     if (i >= nums1.length) return 0;
//     if (prevIndex >= 0 && t[i][prevIndex] !== null) return t[i][prevIndex];

//     let max = 0;

//     for (let j = prevIndex + 1; j < nums2.length; j++) {
//       if (nums2[j] === nums1[i]) {
//         max = Math.max(max, 1 + find(i + 1, j));
//       }
//     }

//     max = Math.max(max, find(i + 1, prevIndex));

//     if (prevIndex >= 0) t[i][prevIndex] = max;

//     return max;
//   }

//   const t = Array(nums1.length + 1)
//     .fill()
//     .map((_) => Array(nums2.length + 1).fill(null));

//   return find(0, -1);
// }

function maxUncrossedLines(nums1, nums2) {
  function findNextGreaterIndex(num, minIndex) {
    const arr = hash[num];
    if (arr) {
      for (const index of arr) {
        if (index > minIndex) return index;
      }
    }

    return -1;
  }

  function find(i, prevIndex) {
    if (i >= n) return 0;
    if (t[i][prevIndex] !== null) return t[i][prevIndex];

    let result = find(i + 1, prevIndex);
    const index = findNextGreaterIndex(nums1[i], prevIndex);

    if (index >= 0) {
      result = Math.max(result, 1 + find(i + 1, index));
    }

    return (t[i][prevIndex] = result);
  }

  nums2.unshift(Number.MIN_SAFE_INTEGER);

  const n = nums1.length;
  const m = nums2.length;
  const hash = {};
  const t = Array(n + 2)
    .fill()
    .map((_) => Array(m + 2).fill(null));

  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]]) hash[nums2[i]].push(i);
    else hash[nums2[i]] = [i];
  }

  return find(0, 0);
}
