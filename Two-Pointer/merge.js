// Had to see the solution
function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0 && i >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    i--;
    k--;
  }

  return nums1;
}
