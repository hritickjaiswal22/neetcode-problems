function makesquare(matchsticks) {
  function find(i) {
    if (i >= matchsticks.length) {
      for (const side of sides) {
        if (side !== targetSide) return false;
      }
      result = true;
      return;
    }
    if (result) return;

    for (let j = 0; j < sides.length; j++) {
      if (sides[j] < targetSide) {
        sides[j] += matchsticks[i];
        find(i + 1);
        sides[j] -= matchsticks[i];
      }
    }
  }

  let sum = 0;
  for (const matchstick of matchsticks) {
    sum += matchstick;
  }
  if (sum % 4 !== 0) return false;
  const targetSide = sum / 4;
  const sides = Array(4).fill(0);
  let result = false;

  find(0);

  return result;
}
