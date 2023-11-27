function combinationSum(candidates, target) {
  function find(target, i, temp) {
    if (target === 0) {
      result.push(temp);
      return;
    }
    if (i >= candidates.length) return;

    if (candidates[i] <= target) {
      find(target - candidates[i], i, [...temp, candidates[i]]);
      find(target, i + 1, temp);
    } else find(target, i + 1, temp);
  }

  const result = [];

  find(target, 0, []);

  return result;
}
