function combinationSum2(candidates, target) {
  function find(sum, i, temp) {
    if (sum === 0) {
      result[JSON.stringify(temp)] = true;
      return;
    }
    if (i >= n || candidates[i] > sum) return;

    const candidate = candidates[i];

    find(sum, i + 1, [...temp]);
    find(sum - candidate, i + 1, [...temp, candidate]);
  }

  const result = {};
  const n = candidates.length;

  candidates.sort((a, b) => a - b);

  if (candidates[0] === candidates[n - 1]) {
    let sum = 0;
    const temp = [];

    for (const candidate of candidates) {
      temp.push(candidate);
      sum += candidate;

      if (sum === target) return temp;
    }
    return [];
  }

  find(target, 0, []);

  return Object.keys(result).map((str) => JSON.parse(str));
}
