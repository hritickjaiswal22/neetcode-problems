// Redo done
function arraySign(nums) {
  let negatives = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negatives++;
  }

  if (negatives & 1) return -1;
  return 1;
}
