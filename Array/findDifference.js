function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const arr1 = [];
  const arr2 = [];

  set1.forEach((val) => {
    if (!set2.has(val)) arr1.push(val);
  });

  set2.forEach((val) => {
    if (!set1.has(val)) arr2.push(val);
  });

  return [arr1, arr2];
}
