function minFlipsMonoIncr(s) {
  const n = s.length;
  let totalOnes = 0;
  let result = Number.MAX_SAFE_INTEGER;
  let tillZeroes = 0;
  let tillOnes = 0;

  for (const bin of s) {
    if (bin === "1") totalOnes++;
  }

  const totalZeroes = n - totalOnes;

  for (const bin of s) {
    result = Math.min(result, tillOnes + totalZeroes - tillZeroes);
    if (bin === "1") tillOnes++;
    else tillZeroes++;
  }

  result = Math.min(result, totalOnes);

  return result;
}
